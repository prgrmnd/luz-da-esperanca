import NewsSection from '../components/NewsSection';
import { news } from '../data/siteData';

export default function NewsPage() {
  return <NewsSection articles={news} />;
}
