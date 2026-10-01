const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export const isContactFormConfigured = Boolean(WEB3FORMS_ACCESS_KEY);

export async function sendContactMessage(message) {
  if (!WEB3FORMS_ACCESS_KEY) {
    throw new Error('O formulário ainda não está configurado para envio.');
  }

  const response = await fetch(WEB3FORMS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      ...message,
    }),
  });

  let result;
  try {
    result = await response.json();
  } catch {
    throw new Error('O serviço de e-mail retornou uma resposta inválida. Tente novamente mais tarde.');
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message || `Não foi possível enviar a mensagem (${response.status}).`);
  }

  return result;
}
