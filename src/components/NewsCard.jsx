import Arrow from './Arrow';

export default function NewsCard({ article, onNavigate }) {
  const target = article.slug ? `/noticias/${article.slug}` : '#noticias';
  return <article className="news-card"><div className="news-media"><span className="news-tag">{article.tag}</span><img src={article.image} alt={article.title} loading="lazy" /></div><div className="news-body"><div className="news-date">{article.date}</div><h3>{article.title}</h3><p>{article.summary || article.description}</p><a href={target} onClick={onNavigate} className="read">Ler noticia <Arrow /></a></div></article>;
}
