import NewsSection from '../components/NewsSection';
import { news } from '../data/siteData';
import { useOutletContext } from 'react-router-dom';

export default function NewsPage() {
  const { onNavigate } = useOutletContext();
  return <NewsSection articles={news} onNavigate={onNavigate} />;
}
