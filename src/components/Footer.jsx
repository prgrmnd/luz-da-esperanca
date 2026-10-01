import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { backgroundImages } from '../data/siteData';
import Arrow from './Arrow';

const footerLinks = [['inicio', 'Inicio'], ['sobre', 'Sobre o Luz'], ['noticias', 'Noticias'], ['ajuda', 'Quero Ajudar'], ['localizacao', 'Localizacao']];

export default function Footer({ onNavigate }) {
  const navigate = useNavigate();
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer
      className="site-footer"
      id="contato"
      style={{ backgroundImage: backgroundImages.footer ? `url('${backgroundImages.footer}')` : 'none' }}
    >
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <a href="#inicio" onClick={onNavigate} className="brand">
            <strong>Luz da<br />Esperanca</strong>
          </a>
          <p>Centro Espirita e Obras Sociais Luz da Esperanca — praticando a caridade desde 2013.</p>
        </div>

        <div className="footer-col">
          <h4>Links Rapidos</h4>
          <ul className="footer-links">
            {footerLinks.map(([target, label]) => (
              <li key={target}>
                <a href={`#${target}`} onClick={onNavigate}><Arrow />{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col footer-donation-cta">
          <h4>Apoie Nossa Causa</h4>
          <p>Sua contribuição transforma vidas e mantém nossas obras sociais funcionando todos os dias.</p>
          <button type="button" className="btn btn-orange btn-lg" onClick={() => navigate('/quero-ajudar')} aria-label="Ir para página de doações">
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            Faça uma Doação
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {year} Centro Espirita e Obras Sociais Luz da Esperanca.</p>
        </div>
      </div>
    </footer>
  );
}
