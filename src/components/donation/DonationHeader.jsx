import { Link } from 'react-router-dom';

export default function DonationHeader() {
  return (
    <header className="donation-header" role="banner">
      <div className="donation-header-container">
        <Link to="/" className="donation-brand" aria-label="Voltar para a página inicial do Luz da Esperança">
          <svg className="donation-back-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
          <div className="donation-brand-text">
            <strong>Luz da Esperança</strong>
            <span>Centro Espírita e Obras Sociais</span>
          </div>
        </Link>
        <Link to="/" className="donation-back-link">
          Voltar ao site
        </Link>
      </div>
    </header>
  );
}
