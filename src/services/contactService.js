import { WORDPRESS_URL } from './wordpressApi';

const CONTACT_URL = import.meta.env.VITE_CONTACT_API_URL || `${WORDPRESS_URL}/wp-json/luz/v1/contact`;

export const isContactFormConfigured = Boolean(CONTACT_URL);

export async function sendContactMessage(message) {
  const response = await fetch(CONTACT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
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
