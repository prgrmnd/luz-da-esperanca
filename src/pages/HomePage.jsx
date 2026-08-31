import { slides } from '../data/siteData';
import { fetchNews } from '../data/newsApi';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AboutSection from '../components/AboutSection';
import Hero from '../components/Hero';
import LocationSection from '../components/LocationSection';
import NewsSection from '../components/NewsSection';

export default function HomePage({ onNavigate }) {
  const outletContext = useOutletContext();
  const [articles, setArticles] = useState([]);
  onNavigate = onNavigate || outletContext?.onNavigate;

  useEffect(() => {
    let mounted = true;
    fetchNews(3).then((result) => mounted && setArticles(result));
    return () => { mounted = false; };
  }, []);

  return <>
    <Hero slides={slides} onNavigate={onNavigate} />
    <AboutSection onNavigate={onNavigate} />
    <NewsSection articles={articles} onNavigate={onNavigate} />
    <LocationSection />
  </>;
}
