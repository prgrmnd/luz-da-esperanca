# Contato pelo Resend

1. No WordPress, abra **Plugins → Adicionar plugin → Enviar plugin**.
2. Selecione `luz-contact.zip` desta pasta, instale e ative.
3. Abra **Configurações → Contato Luz**.
4. Cole a chave Resend com permissão de envio. Ela é salva apenas no WordPress, nunca no React. O formulário de configuração não exibe a chave já salva.
5. Mantenha o remetente `site@luzdaesperanca.org` (domínio verificado) e o destinatário `diretoria@luzdaesperanca.org`. Salve.
6. No projeto React, configure `VITE_WORDPRESS_URL=/noticias` no `.env` se esse for o caminho real do WordPress. Se estiver na raiz, use `/`.
7. Execute `npm.cmd run build` e publique o conteúdo completo de `dist/` na pasta do site, preservando a instalação existente do WordPress.
8. Envie uma mensagem pela página Contato. Confira o registro em **Resend → Emails**, a entrega na caixa da diretoria e o endereço de resposta do visitante.

O endpoint padrão é `/noticias/wp-json/luz/v1/contact`. É necessário que o plugin esteja instalado no WordPress correspondente a `VITE_WORDPRESS_URL`. Para WordPress em outro domínio, configure `VITE_CONTACT_API_URL` com a URL completa e ajuste CORS no servidor para permitir o domínio do site.

Não coloque a chave Resend em variáveis `VITE_*`. A antiga `VITE_WEB3FORMS_ACCESS_KEY` não é mais utilizada e pode ser removida do ambiente de hospedagem e do `.env` local.

O destinatário pode ser alterado no painel, sem gerar outro build. Ele deve ser uma caixa existente. O visitante não pode escolher destinatário ou remetente; seu e-mail é usado em `reply_to`.

O plugin valida os campos, usa o campo invisível contra bots e limita tentativas a uma por minuto por IP e 90 por dia no total. Esses limites usam transientes do WordPress e são uma proteção básica, não uma garantia contra requisições simultâneas. Se houver abuso, ative proteção adicional na hospedagem/Cloudflare. A cota mensal e outros envios da conta Resend também devem ser acompanhados no painel.

Sem WordPress/PHP local, valide primeiro na hospedagem ou em uma instalação de teste. A confirmação do formulário indica que o Resend aceitou o envio; confirme a entrega real no painel do Resend e com a diretoria.
