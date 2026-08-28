import ContactForm from '../components/ContactForm';
import PageIntro from './PageIntro';

export default function ContactPage() {
  return <PageIntro eyebrow="Contato" title="Fale conosco" description="Entre em contato com a equipe do Luz da Esperança."><div className="page-form"><ContactForm /></div></PageIntro>;
}
