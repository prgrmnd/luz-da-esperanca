import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

export default function AboutSection({ onNavigate }) {
  return <section className="section" id="sobre"><div className="container about-cta-grid"><div className="about-col"><SectionHeader eyebrow="Quem somos" title="Luz da Esperanca" /><div className="about-single"><p><strong>O Centro Espirita e Obras Sociais Luz da Esperanca</strong> foi criado em <strong>junho de 2013</strong> para assistir materialmente, moralmente e espiritualmente a todos que procurarem ajuda.</p><p>Buscamos praticar a caridade moral e material, prestando servicos gratuitos e permanentes, principalmente a criancas e adolescentes em situacao de risco social.</p></div></div><div className="cta-col" id="ajuda"><div className="container-inner"><SectionHeader eyebrow="Seja parte dessa luz" title="Quero Ajudar" description="Sua doacao e o seu tempo como voluntario iluminam o caminho de quem mais precisa." /><div className="cta-buttons"><Link to="/quero-ajudar" onClick={onNavigate} className="btn btn-orange btn-lg">Quero Fazer uma Doacao</Link></div></div></div></div></section>;
}
