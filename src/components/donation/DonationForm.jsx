import { useState, useMemo } from 'react';
import {
  parseCurrencyInput,
  validateDonationAmount,
  calculateTransactionFee,
  calculateTotalDonation,
  formatCurrency,
} from '../../services/donationService';
import { initiatePayPalCheckout } from '../../services/paypalService';

export default function DonationForm() {
  const [rawAmount, setRawAmount] = useState('');
  const [coverFees, setCoverFees] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Valor numérico limpo para cálculos
  const numericAmount = useMemo(() => parseCurrencyInput(rawAmount), [rawAmount]);

  // Taxa estimada
  const estimatedFee = useMemo(
    () => (numericAmount > 0 ? calculateTransactionFee(numericAmount) : 0),
    [numericAmount]
  );

  // Cálculo total encapsulado no serviço de domínio
  const financialSummary = useMemo(
    () => calculateTotalDonation({ amount: numericAmount, coverFees }),
    [numericAmount, coverFees]
  );

  const handleAmountChange = (e) => {
    const val = e.target.value;
    setRawAmount(val);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handlePayment = (paymentMethod) => {
    const validation = validateDonationAmount(rawAmount);

    if (!validation.isValid) {
      setErrorMessage(validation.error || 'Informe um valor válido para continuar.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    try {
      initiatePayPalCheckout({
        amount: financialSummary.total,
        isRecurring,
        paymentMethod,
      });
    } catch (err) {
      console.error('Erro ao encaminhar para o PayPal:', err);
      setErrorMessage('Ocorreu um erro ao conectar com o PayPal. Tente novamente.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="donation-card" aria-labelledby="donation-heading">
      <div className="donation-card-header">
        <div className="donation-badge">Apoie nossa causa</div>
        <h1 id="donation-heading" className="donation-title">
          Faça sua Doação
        </h1>
        <p className="donation-subtitle">
          Sua contribuição transforma vidas e mantém nossas obras sociais e acolhimento comunitário.
        </p>
      </div>

      <form
        className="donation-form"
        onSubmit={(e) => {
          e.preventDefault();
          handlePayment('paypal');
        }}
        noValidate
      >
        {/* Campo de Entrada de Valor */}
        <div className="donation-field-group">
          <label htmlFor="donation-amount-input" className="donation-field-label">
            Valor da doação (BRL)
          </label>
          <div className={`donation-input-container ${errorMessage ? 'has-error' : ''}`}>
            <span className="donation-currency-prefix" aria-hidden="true">
              R$
            </span>
            <input
              id="donation-amount-input"
              type="text"
              inputMode="decimal"
              placeholder="0,00"
              value={rawAmount}
              onChange={handleAmountChange}
              className="donation-amount-input"
              aria-invalid={Boolean(errorMessage)}
              aria-describedby={errorMessage ? 'donation-error-msg' : undefined}
              required
            />
          </div>
          {errorMessage && (
            <p id="donation-error-msg" className="donation-error-text" role="alert">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {errorMessage}
            </p>
          )}
        </div>

        {/* Opções de Doação: Cobertura de Taxas e Recorrência */}
        <div className="donation-options-group">
          {/* Opção: Adicionar taxas da transação */}
          <label className="donation-checkbox-label">
            <input
              type="checkbox"
              checked={coverFees}
              onChange={(e) => setCoverFees(e.target.checked)}
              className="donation-checkbox"
            />
            <div className="donation-checkbox-content">
              <span className="donation-checkbox-title">
                Adicionar taxas da transação
                {estimatedFee > 0 && (
                  <span className="donation-fee-pill">
                    +{formatCurrency(estimatedFee)}
                  </span>
                )}
              </span>
              <span className="donation-checkbox-desc">
                Adicione o equivalente às taxas da transação para que 100% da sua contribuição chegue à instituição.
              </span>
            </div>
          </label>

          {/* Opção: Doação Recorrente */}
          <label className="donation-checkbox-label">
            <input
              type="checkbox"
              checked={isRecurring}
              onChange={(e) => setIsRecurring(e.target.checked)}
              className="donation-checkbox"
            />
            <div className="donation-checkbox-content">
              <span className="donation-checkbox-title">
                Fazer desta uma doação mensal
              </span>
              <span className="donation-checkbox-desc">
                Contribua automaticamente todos os meses para apoiar a manutenção contínua das atividades.
              </span>
            </div>
          </label>
        </div>

        {/* Resumo Financeiro */}
        <div className="donation-summary-box" aria-live="polite">
          <div className="donation-summary-row">
            <span>Valor pretendido:</span>
            <span>{formatCurrency(financialSummary.baseAmount)}</span>
          </div>
          {coverFees && (
            <div className="donation-summary-row fee-row">
              <span>Taxa de processamento:</span>
              <span>+{formatCurrency(financialSummary.fee)}</span>
            </div>
          )}
          <div className="donation-summary-divider" />
          <div className="donation-summary-total">
            <span>Total da contribuição:</span>
            <strong>
              {formatCurrency(financialSummary.total)}
              {isRecurring && <span className="donation-freq-badge">/ mês</span>}
            </strong>
          </div>
        </div>

        {/* Formas de Pagamento (PayPal / Cartão via PayPal) */}
        <div className="donation-actions">
          <button
            type="button"
            className="btn-payment btn-paypal"
            onClick={() => handlePayment('paypal')}
            disabled={isSubmitting}
            aria-label={`Doar ${formatCurrency(financialSummary.total || 0)} com PayPal`}
          >
            <svg className="paypal-logo-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.006.402 5.433 0 5.938 0h7.892c3.926 0 6.64 1.765 6.07 5.753-.47 3.284-2.585 5.176-5.897 5.176h-2.12l-1.34 8.52a.641.641 0 0 1-.633.541l-2.834 1.347z"/>
            </svg>
            <span>Doar com <strong>PayPal</strong></span>
          </button>

          <button
            type="button"
            className="btn-payment btn-card"
            onClick={() => handlePayment('card')}
            disabled={isSubmitting}
            aria-label={`Pagar ${formatCurrency(financialSummary.total || 0)} com cartão de débito ou crédito`}
          >
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
            <span>Pagar com cartão de débito ou crédito</span>
          </button>
        </div>

        {/* Aviso de Segurança e Processamento */}
        <div className="donation-security-notice">
          <svg className="shield-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>
            Pagamento seguro processado pelo PayPal. Não armazenamos informações de cartão.
          </span>
        </div>
      </form>
    </div>
  );
}
