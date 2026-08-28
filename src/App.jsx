import { useEffect } from 'react';
import { news, slides } from './data/siteData';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import LocationSection from './components/LocationSection';
import NewsSection from './components/NewsSection';

export default function App() {
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
    <main id="main">
      <Hero slides={slides} onNavigate={onNavigate} />
      <AboutSection onNavigate={onNavigate} />
      <NewsSection articles={news} onNavigate={onNavigate} />
      <LocationSection />
    </main>
    <Footer onNavigate={onNavigate} />
  </>;
}
