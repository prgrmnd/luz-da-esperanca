import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function SiteLayout() {
  useEffect(() => {
    const header = document.getElementById('header');
    const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onNavigate = (event) => {
    const target = event.currentTarget.getAttribute('href');
    if (!target?.startsWith('#') || target === '#') return;
    const element = document.querySelector(target);
    if (!element) return;
    event.preventDefault();
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return <>
    <Header onNavigate={onNavigate} />
    <main id="main"><Outlet context={{ onNavigate }} /></main>
    <Footer onNavigate={onNavigate} />
  </>;
}
