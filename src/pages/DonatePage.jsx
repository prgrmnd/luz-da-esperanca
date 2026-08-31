import { useEffect } from 'react';
import DonationHeader from '../components/donation/DonationHeader';
import DonationForm from '../components/donation/DonationForm';
import DonationFooter from '../components/donation/DonationFooter';

export default function DonatePage() {
  useEffect(() => {
    document.title = 'Faça sua Doação — Centro Espírita e Obras Sociais Luz da Esperança';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="donation-page-layout">
      <DonationHeader />
      <main id="main" className="donation-main-content">
        <div className="container donation-container">
          <DonationForm />
        </div>
      </main>
      <DonationFooter />
    </div>
  );
}
