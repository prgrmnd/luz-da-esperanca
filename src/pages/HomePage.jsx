import { useEffect, useState } from 'react';
import { slides } from '../data/siteData';
import { useOutletContext } from 'react-router-dom';
import AboutSection from '../components/AboutSection';
import Hero from '../components/Hero';
import LocationSection from '../components/LocationSection';
import NewsSection from '../components/NewsSection';
import { fetchNews } from '../data/newsApi';

export default function HomePage({ onNavigate }) {
  const outletContext = useOutletContext();
  onNavigate = onNavigate || outletContext?.onNavigate;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetchNews(3).then((result) => {
      if (!mounted) return;
      setArticles(result);
    });
    return () => { mounted = false; };
  }, []);

  return <>
    <Hero slides={slides} onNavigate={onNavigate} />
    <AboutSection onNavigate={onNavigate} />
    <NewsSection articles={articles} onNavigate={onNavigate} />
    <LocationSection />
  </>;
}
