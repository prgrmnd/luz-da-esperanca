import { useEffect, useState } from 'react';
import { menuGroups } from '../data/siteData';
import Arrow from './Arrow';
import ContactForm from './ContactForm';

const footerLinks = [['inicio', 'Inicio'], ['sobre', 'Sobre o Luz'], ['noticias', 'Noticias'], ['ajuda', 'Quero Ajudar'], ['localizacao', 'Localizacao']];

export default function Footer({ onNavigate }) {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <footer className="site-footer" id="contato"><div className="container footer-grid"><div className="footer-col footer-brand"><a href="#inicio" onClick={onNavigate} className="brand"><strong>Luz da<br />Esperanca</strong></a><p>Centro Espirita e Obras Sociais Luz da Esperanca — praticando a caridade desde 2013.</p><ul className="footer-contact"><li><a href="mailto:contato@luzdaesperanca.org.br">contato@luzdaesperanca.org.br</a></li><li><a href="tel:+5586999999999">+55 (86) 99999-9999</a></li></ul></div><div className="footer-col"><h4>Links Rapidos</h4><ul className="footer-links">{footerLinks.map(([target, label]) => <li key={target}><a href={`#${target}`} onClick={onNavigate}><Arrow />{label}</a></li>)}</ul></div><div className="footer-col"><h4>Fale Conosco</h4><ContactForm /></div></div><div className="footer-bottom"><div className="container"><p>© {year} Centro Espirita e Obras Sociais Luz da Esperanca.</p></div></div></footer>;
}
