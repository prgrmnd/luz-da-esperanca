/**
 * Domínio e regras de negócio para a página de doação.
 * Isola a lógica de validação, formatação e cálculos financeiros da camada visual.
 */

export const FEE_PERCENTAGE = 0.0399; // 3.99%
export const FEE_FIXED = 0.60;       // R$ 0,60
export const MIN_DONATION_AMOUNT = 1.00; // Valor mínimo em BRL

/**
 * Converte entradas de texto (ex: "50", "50,00", "R$ 50,00", "1.250,50") em número float.
 * @param {string|number} input
 * @returns {number}
 */
export function parseCurrencyInput(input) {
  if (typeof input === 'number') {
    return isFinite(input) ? input : 0;
  }
  if (!input || typeof input !== 'string') {
    return 0;
  }

  // Remove símbolos monetários e espaços
  let clean = input.replace(/[R$\s]/g, '').trim();
  if (!clean) return 0;

  // Se houver pontos e vírgulas (ex: 1.250,50)
  if (clean.includes('.') && clean.includes(',')) {
    clean = clean.replace(/\./g, '').replace(',', '.');
  } else if (clean.includes(',')) {
    // Ex: 50,50
    clean = clean.replace(',', '.');
  }

  const parsed = parseFloat(clean);
  return isNaN(parsed) ? 0 : parsed;
}

/**
 * Valida o valor da doação informado pelo usuário.
 * @param {number|string} rawAmount
 * @returns {{ isValid: boolean, error: string|null, numericValue: number }}
 */
export function validateDonationAmount(rawAmount) {
  const numericValue = typeof rawAmount === 'number' ? rawAmount : parseCurrencyInput(rawAmount);

  if (rawAmount === '' || rawAmount === null || rawAmount === undefined) {
    return {
      isValid: false,
      error: 'Por favor, informe o valor da doação.',
      numericValue: 0,
    };
  }

  if (isNaN(numericValue) || !isFinite(numericValue)) {
    return {
      isValid: false,
      error: 'Informe um valor numérico válido.',
      numericValue: 0,
    };
  }

  if (numericValue <= 0) {
    return {
      isValid: false,
      error: 'O valor da doação deve ser maior que zero.',
      numericValue: 0,
    };
  }

  if (numericValue < MIN_DONATION_AMOUNT) {
    return {
      isValid: false,
      error: `O valor mínimo para doação é de ${formatCurrency(MIN_DONATION_AMOUNT)}.`,
      numericValue,
    };
  }

  return {
    isValid: true,
    error: null,
    numericValue: Math.round(numericValue * 100) / 100,
  };
}

/**
 * Calcula a taxa estimada de transação para a doação.
 * @param {number} amount
 * @returns {number}
 */
export function calculateTransactionFee(amount) {
  if (!amount || amount <= 0 || isNaN(amount)) {
    return 0;
  }
  const fee = (amount * FEE_PERCENTAGE) + FEE_FIXED;
  return Math.round(fee * 100) / 100;
}

/**
 * Calcula o resumo financeiro da doação considerando o valor base e a opção de cobrir taxas.
 * @param {Object} params
 * @param {number|string} params.amount
 * @param {boolean} [params.coverFees=false]
 * @returns {{ baseAmount: number, fee: number, total: number, coverFees: boolean }}
 */
export function calculateTotalDonation({ amount, coverFees = false }) {
  const numericAmount = typeof amount === 'number' ? amount : parseCurrencyInput(amount);

  if (!numericAmount || numericAmount <= 0 || isNaN(numericAmount)) {
    return {
      baseAmount: 0,
      fee: 0,
      total: 0,
      coverFees: Boolean(coverFees),
    };
  }

  const baseAmount = Math.round(numericAmount * 100) / 100;
  const fee = coverFees ? calculateTransactionFee(baseAmount) : 0;
  const total = Math.round((baseAmount + fee) * 100) / 100;

  return {
    baseAmount,
    fee,
    total,
    coverFees: Boolean(coverFees),
  };
}

/**
 * Formata um valor numérico em moeda brasileira (BRL).
 * @param {number} amount
 * @returns {string}
 */
export function formatCurrency(amount) {
  const validAmount = typeof amount === 'number' && isFinite(amount) ? amount : 0;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(validAmount);
}
