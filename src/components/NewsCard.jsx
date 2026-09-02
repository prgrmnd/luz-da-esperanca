import Arrow from './Arrow';

function truncateText(text = '', maxLength = 120) {
  const plain = String(text).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  if (plain.length <= maxLength) return plain;
  return `${plain.slice(0, maxLength).trim()}...`;
}

export default function NewsCard({ article, onNavigate }) {
  const target = `/noticias/${article.slug}`;
  const summary = truncateText(article.summary || article.description, 120);

  return <article className="news-card"><div className="news-media"><span className="news-tag">{article.tag}</span><img src={article.image} alt={article.title} loading="lazy" /></div><div className="news-body"><div className="news-date">{article.date}</div><h3>{article.title}</h3><p>{summary}</p><a href={target} onClick={onNavigate} className="read">Ler noticia <Arrow /></a></div></article>;
}
