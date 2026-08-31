import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { fetchNews } from '../data/newsApi';
import NewsFeed from './NewsFeed';

export default function NewsPage() {
  const { onNavigate } = useOutletContext();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchNews(12).then((result) => {
      if (!mounted) return;
      setArticles(result);
      setLoading(false);
    });
    return () => { mounted = false; };
  }, []);

  if (loading) return <div className="container section loading-page"><div className="loader-wrap" aria-live="polite" aria-label="Carregando notícias"><div className="loader-ring" /></div></div>;
  return <NewsFeed articles={articles} onNavigate={onNavigate} />;
}
