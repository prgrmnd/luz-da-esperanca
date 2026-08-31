/**
 * Infraestrutura e integração para encaminhamento de pagamentos ao PayPal.
 * Isola a construção de URLs e parâmetros do provedor de pagamento.
 */

export const PAYPAL_ENDPOINT = 'https://www.paypal.com/cgi-bin/webscr';
export const PAYPAL_BUSINESS_EMAIL = 'contato@luzdaesperanca.org.br';
export const PAYPAL_ITEM_NAME = 'Doação — Centro Espírita e Obras Sociais Luz da Esperança';

/**
 * Cria a carga de dados (payload) para o encaminhamento ao PayPal.
 * @param {Object} params
 * @param {number} params.amount - Valor total da contribuição
 * @param {boolean} [params.isRecurring=false] - Se é doação mensal recorrente
 * @param {string} [params.paymentMethod='paypal'] - 'paypal' ou 'card'
 * @param {string} [params.currency='BRL'] - Código da moeda
 * @returns {Object}
 */
export function createPayPalPayload({
  amount,
  isRecurring = false,
  paymentMethod = 'paypal',
  currency = 'BRL',
}) {
  const formattedAmount = Number(amount).toFixed(2);

  if (isRecurring) {
    return {
      cmd: '_xclick-subscriptions',
      business: PAYPAL_BUSINESS_EMAIL,
      item_name: `${PAYPAL_ITEM_NAME} (Mensal)`,
      currency_code: currency,
      a3: formattedAmount, // Valor recorrente
      p3: '1',             // A cada 1
      t3: 'M',             // M = Mês
      src: '1',            // Recorrência ativa
      sra: '1',            // Re-tentativa em caso de falha
      no_shipping: '1',
      no_note: '0',
      ...(paymentMethod === 'card' ? { landing_page: 'billing' } : {}),
    };
  }

  return {
    cmd: '_donations',
    business: PAYPAL_BUSINESS_EMAIL,
    item_name: PAYPAL_ITEM_NAME,
    currency_code: currency,
    amount: formattedAmount,
    no_shipping: '1',
    no_note: '0',
    ...(paymentMethod === 'card' ? { landing_page: 'billing' } : {}),
  };
}

/**
 * Constrói a URL completa para redirecionamento ao PayPal com base no payload.
 * @param {Object} payload
 * @returns {string}
 */
export function buildPayPalRedirectUrl(payload) {
  const queryParams = new URLSearchParams();
  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      queryParams.append(key, String(value));
    }
  });

  return `${PAYPAL_ENDPOINT}?${queryParams.toString()}`;
}

/**
 * Encaminha o fluxo de pagamento para o PayPal.
 * Em ambiente de navegador, pode redirecionar ou abrir a janela do checkout.
 * @param {Object} params
 * @param {number} params.amount
 * @param {boolean} params.isRecurring
 * @param {string} params.paymentMethod
 * @returns {{ success: boolean, redirectUrl: string, payload: Object }}
 */
export function initiatePayPalCheckout({
  amount,
  isRecurring = false,
  paymentMethod = 'paypal',
}) {
  const payload = createPayPalPayload({ amount, isRecurring, paymentMethod });
  const redirectUrl = buildPayPalRedirectUrl(payload);

  if (typeof window !== 'undefined' && window.location) {
    window.location.href = redirectUrl;
  }

  return {
    success: true,
    redirectUrl,
    payload,
  };
}
