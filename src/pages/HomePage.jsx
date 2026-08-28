import { news, slides } from '../data/siteData';
import AboutSection from '../components/AboutSection';
import Hero from '../components/Hero';
import LocationSection from '../components/LocationSection';
import NewsSection from '../components/NewsSection';

export default function HomePage({ onNavigate }) {
  return <>
    <Hero slides={slides} onNavigate={onNavigate} />
    <AboutSection onNavigate={onNavigate} />
    <NewsSection articles={news} onNavigate={onNavigate} />
    <LocationSection />
  </>;
}
