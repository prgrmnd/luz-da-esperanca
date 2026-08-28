import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function SiteLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const header = document.getElementById('header');
    const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onNavigate = (event) => {
    const target = event.currentTarget.getAttribute('href');
    if (!target || target === '#') return;

    if (target.startsWith('/')) {
      event.preventDefault();
      navigate(target);
      return;
    }

    if (!target.startsWith('#')) return;
    if (location.pathname !== '/') {
      event.preventDefault();
      navigate(target === '#inicio' ? '/' : `/${target.slice(1)}`);
      return;
    }

    const element = document.querySelector(target);
    if (element) {
      event.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <>
    <Header onNavigate={onNavigate} />
    <main id="main"><Outlet context={{ onNavigate }} /></main>
    <Footer onNavigate={onNavigate} />
  </>;
}
