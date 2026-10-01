import { useState } from 'react';

const languages = [
  { code: 'pt-BR', name: 'Português (Brasil)' },
  { code: 'en-US', name: 'English' },
  { code: 'es-ES', name: 'Español' },
];

export default function DonationFooter() {
  const [selectedLanguage, setSelectedLanguage] = useState('pt-BR');

  return (
    <footer className="donation-footer" role="contentinfo">
      <div className="donation-footer-container">
        <div className="donation-footer-lang">
          <label htmlFor="donation-lang-select" className="sr-only">
            Selecione o idioma
          </label>
          <div className="donation-lang-wrapper">
            <svg className="donation-lang-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <select
              id="donation-lang-select"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              aria-label="Idioma da página"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <nav className="donation-footer-links" aria-label="Links de segurança e privacidade">
          <a href="#seguranca" onClick={(e) => { e.preventDefault(); alert('Segurança: Todas as doações são processadas com criptografia de ponta a ponta pelo PayPal.'); }}>
            Segurança
          </a>
          <span className="donation-footer-dot" aria-hidden="true">•</span>
          <a href="#privacidade" onClick={(e) => { e.preventDefault(); alert('Política de Privacidade: Seus dados cadastrais são tratados com estrita confidencialidade e nunca compartilhados.'); }}>
            Política de Privacidade
          </a>
        </nav>
      </div>
    </footer>
  );
}
