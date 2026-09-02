import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { fetchNewsBySlug } from '../data/newsApi';

export default function ArticlePage() {
  const { slug } = useParams();
  const { onNavigate } = useOutletContext();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchNewsBySlug(slug).then((result) => {
      if (!mounted) return;
      setArticle(result);
      setLoading(false);
    });
    return () => { mounted = false; };
  }, [slug]);

  if (loading) {
    return <div className="container section loading-page"><div className="loader-wrap"><div className="loader-ring" aria-label="Carregando notícia" /></div></div>;
  }

  if (!article) {
    return <div className="container section"><div className="article-empty"><h2>Notícia não encontrada.</h2><a href="/noticias" className="btn btn-orange" onClick={onNavigate}>Voltar para notícias</a></div></div>;
  }

  return <article className="section article-section"><div className="container article-page">
    <div className="article-header">
      <p className="article-kicker">{article.tag}</p>
      <h1>{article.title}</h1>
      <div className="article-meta">
        <span>{article.date}</span>
      </div>
    </div>

    <div className="article-hero-image">
      <img src={article.image} alt={article.title} />
    </div>

    <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content || '<p>Conteúdo indisponível.</p>' }} />

    <div className="article-actions">
      <a href="/noticias" className="btn btn-outline" onClick={onNavigate}>Voltar para notícias</a>
    </div>
  </div></article>;
}
