import Arrow from '../components/Arrow';

export default function NewsFeed({ articles, onNavigate }) {
  const [featured, ...rest] = articles;

  return <section className="section page-intro news-list-page"><div className="container news-centralized">
    <div className="section-head section-head--compact news-section-head"><span className="eyebrow">Fique por dentro</span><h2>Notícias</h2><div className="divider" /></div>
    <div className="news-feed">
      {featured && <article className="news-story featured-story-block" key={featured.id || featured.slug}>
        <div className="news-story-meta"><span className="news-story-date">{featured.date}</span><span className="news-story-tag">{featured.tag}</span></div>
        <h2>{featured.title}</h2>
        <div className="news-story-media"><img src={featured.image} alt={featured.title} loading="lazy" /></div>
        <p>{featured.summary || featured.description}</p>
        <a href={`/noticias/${featured.slug}`} onClick={onNavigate} className="read">Continuar lendo <Arrow /></a>
      </article>}
      {rest.map((article) => <article className="news-story block-story" key={article.id || article.slug}>
        <div className="news-story-meta"><span className="news-story-date">{article.date}</span><span className="news-story-tag">{article.tag}</span></div>
        <div className="news-story-content-wrapper"><div className="news-story-copy"><h3>{article.title}</h3><p>{article.summary || article.description}</p><a href={`/noticias/${article.slug}`} onClick={onNavigate} className="read">Ler notícia <Arrow /></a></div><div className="news-story-media compact"><img src={article.image} alt={article.title} loading="lazy" /></div></div>
      </article>)}
    </div>
  </div></section>;
}
