<?php
/**
 * Plugin Name: Luz da Esperança - Contato Resend
 * Description: Recebe o formulário do site e envia mensagens pelo Resend.
 * Version: 1.0.0
 * Requires PHP: 7.4
 */
defined('ABSPATH') || exit;

add_action('admin_menu', function () {
    add_options_page('Contato Luz', 'Contato Luz', 'manage_options', 'luz-contact', 'luz_contact_settings');
});

function luz_contact_settings() {
    if (!current_user_can('manage_options')) return;
    if (isset($_POST['luz_save'])) {
        check_admin_referer('luz_contact_settings');
        $key = isset($_POST['resend_key']) && is_string($_POST['resend_key']) ? trim(wp_unslash($_POST['resend_key'])) : '';
        if ($key !== '') update_option('luz_resend_key', sanitize_text_field($key), false);
        $recipient = sanitize_email(wp_unslash($_POST['recipient'] ?? ''));
        $sender = sanitize_email(wp_unslash($_POST['sender'] ?? ''));
        if (is_email($recipient) && is_email($sender)) {
            update_option('luz_contact_recipient', $recipient, false);
            update_option('luz_contact_sender', $sender, false);
            echo '<div class="notice notice-success"><p>Configuração salva.</p></div>';
        } else {
            echo '<div class="notice notice-error"><p>Informe endereços de e-mail válidos.</p></div>';
        }
    }
    ?>
    <div class="wrap"><h1>Contato Luz — Resend</h1>
    <p>Configure uma chave com permissão de envio e um remetente do domínio verificado. A chave permanece no servidor.</p>
    <p><?php echo get_option('luz_resend_key') ? 'Chave já cadastrada. Deixe o campo vazio para mantê-la.' : 'Cadastre sua chave do Resend para habilitar o envio.'; ?></p>
    <form method="post">
    <?php wp_nonce_field('luz_contact_settings'); ?>
    <table class="form-table">
      <tr><th><label for="resend_key">Chave Resend</label></th><td><input id="resend_key" name="resend_key" type="password" autocomplete="new-password" class="regular-text" /></td></tr>
      <tr><th><label for="sender">Remetente verificado</label></th><td><input id="sender" name="sender" type="email" required class="regular-text" value="<?php echo esc_attr(get_option('luz_contact_sender', 'site@luzdaesperanca.org')); ?>" /></td></tr>
      <tr><th><label for="recipient">Destinatário</label></th><td><input id="recipient" name="recipient" type="email" required class="regular-text" value="<?php echo esc_attr(get_option('luz_contact_recipient', 'diretoria@luzdaesperanca.org')); ?>" /></td></tr>
    </table>
    <?php submit_button('Salvar configuração', 'primary', 'luz_save'); ?>
    </form></div>
    <?php
}

add_action('rest_api_init', function () {
    register_rest_route('luz/v1', '/contact', array(
        'methods' => 'POST',
        'callback' => 'luz_contact_send',
        // Formulário público; destinatário e credenciais são definidos no servidor.
        'permission_callback' => '__return_true',
    ));
});

function luz_contact_send(WP_REST_Request $request) {
    if (strlen($request->get_body()) > 20000) {
        return new WP_Error('too_large', 'Mensagem muito longa.', array('status' => 413));
    }
    $data = $request->get_json_params();
    if (!is_array($data)) return new WP_Error('invalid', 'Dados inválidos.', array('status' => 400));
    if (!empty($data['botcheck'])) return new WP_Error('invalid', 'Não foi possível enviar.', array('status' => 400));
    foreach (array('name' => 120, 'email' => 254, 'subject' => 180, 'message' => 5000) as $field => $limit) {
        $value = $data[$field] ?? null;
        $length = is_string($value) ? (function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value)) : 0;
        if (!is_string($value) || trim($value) === '' || $length > $limit) {
            return new WP_Error('invalid', 'Confira os campos e os limites da mensagem.', array('status' => 400));
        }
    }
    if (!is_email($data['email'])) return new WP_Error('invalid', 'Informe um e-mail válido.', array('status' => 400));
    $key = get_option('luz_resend_key', '');
    if (!$key) return new WP_Error('unavailable', 'O envio ainda não está configurado. Tente novamente mais tarde.', array('status' => 503));
    // Usa o IP da conexão, sem confiar em cabeçalhos enviados pelo visitante.
    $bucket = 'luz_contact_' . hash_hmac('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unknown', wp_salt());
    if (get_transient($bucket)) return new WP_Error('rate_limit', 'Aguarde um minuto antes de enviar outra mensagem.', array('status' => 429));
    set_transient($bucket, 1, MINUTE_IN_SECONDS);
    // Limite global conservador para proteger a cota gratuita, contando tentativas.
    $daily_key = 'luz_contact_daily_' . gmdate('Ymd');
    $count = (int) get_transient($daily_key);
    if ($count >= 90) return new WP_Error('rate_limit', 'Limite diário de mensagens atingido. Tente novamente amanhã.', array('status' => 429));
    set_transient($daily_key, $count + 1, 2 * DAY_IN_SECONDS);
    $name = sanitize_text_field($data['name']);
    $subject = sanitize_text_field($data['subject']);
    $response = wp_remote_post('https://api.resend.com/emails', array(
        'timeout' => 20,
        'headers' => array('Authorization' => 'Bearer ' . $key, 'Content-Type' => 'application/json'),
        'body' => wp_json_encode(array(
            'from' => 'Luz da Esperança <' . get_option('luz_contact_sender', 'site@luzdaesperanca.org') . '>',
            'to' => array(get_option('luz_contact_recipient', 'diretoria@luzdaesperanca.org')),
            'reply_to' => $data['email'],
            'subject' => '[Contato do site] ' . $subject,
            'text' => "Nome: {$name}\nE-mail: {$data['email']}\nAssunto: {$subject}\n\n" . sanitize_textarea_field($data['message']),
        )),
    ));
    if (is_wp_error($response)) return new WP_Error('send_failed', 'Não foi possível enviar. Tente novamente mais tarde.', array('status' => 502));
    $status = wp_remote_retrieve_response_code($response);
    $result = json_decode(wp_remote_retrieve_body($response), true);
    if ($status < 200 || $status >= 300 || empty($result['id'])) {
        return new WP_Error('send_failed', 'Não foi possível enviar. Verifique com a equipe do site.', array('status' => 502));
    }
    $result = new WP_REST_Response(array('success' => true), 200);
    $result->header('Cache-Control', 'no-store');
    return $result;
}
