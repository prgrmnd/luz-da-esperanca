import { useState } from 'react';
import Arrow from './Arrow';
import NewsCard from './NewsCard';
import SectionHeader from './SectionHeader';

export default function NewsSection({ articles, onNavigate }) {
  const [page, setPage] = useState(1);
  const perPage = 3;
  const totalPages = Math.ceil(articles.length / perPage);
  const visibleArticles = articles.slice((page - 1) * perPage, page * perPage);
  const changePage = (nextPage) => setPage(Math.min(Math.max(nextPage, 1), totalPages));

  return <section className="section news-wrap" id="noticias"><div className="container"><SectionHeader eyebrow="Fique por dentro" title="Noticias" description="As novidades da casa, eventos, campanhas e acoes sociais recentes." /><div className="news-grid">{visibleArticles.map((article) => <NewsCard key={article.title} article={article} onNavigate={onNavigate} />)}</div><div className="pagination" role="navigation" aria-label="Paginacao de noticias"><button className="page-btn nav-btn" disabled={page === 1} onClick={() => changePage(page - 1)} aria-label="Pagina anterior"><Arrow direction="left" /></button>{Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => <button key={number} className={`page-btn ${page === number ? 'active' : ''}`} onClick={() => changePage(number)} aria-label={`Pagina ${number}`}>{number}</button>)}<button className="page-btn nav-btn" disabled={page === totalPages} onClick={() => changePage(page + 1)} aria-label="Proxima pagina"><Arrow /></button></div></div></section>;
}
