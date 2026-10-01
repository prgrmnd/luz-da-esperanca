import { news as fallbackNews } from './siteData';
import { WORDPRESS_URL } from '../services/wordpressApi';

const API_URL = `${WORDPRESS_URL}/wp-json/wp/v2/posts`;
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=70';

function stripHtml(value = '') {
  if (typeof document === 'undefined') {
    return String(value).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  const element = document.createElement('div');
  element.innerHTML = value;
  return (element.textContent || '').replace(/\s+/g, ' ').trim();
}

function firstParagraph(value = '') {
  return value.match(/<p[^>]*>.*?<\/p>/is)?.[0] || '';
}

function firstImage(value = '') {
  return value.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i)?.[1] || '';
}

function formatDate(value) {
  if (!value) return 'Sem data';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Sem data';
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
}

function sanitizeContent(value = '') {
  return String(value)
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, '')
    .replace(/\son\w+\s*=\s*(["']).*?\1/gi, '')
    .replace(/javascript:/gi, '');
}

export function normalizePost(post, index = 0) {
  const content = post.content?.rendered || '';
  const excerpt = post.excerpt?.rendered || '';
  const summary = firstParagraph(content) || excerpt;
  const embeddedImage = post._embedded?.['wp:featuredmedia']?.[0];
  const image = firstImage(content)
    || post.featured_image_url
    || embeddedImage?.source_url
    || FALLBACK_IMAGE;

  return {
    id: post.id ?? index,
    slug: post.slug || `post-${post.id ?? index}`,
    tag: post.news_tag || 'Notícia',
    date: formatDate(post.date),
    title: stripHtml(post.title?.rendered || 'Sem título'),
    description: stripHtml(excerpt || content || 'Sem descrição'),
    summary: stripHtml(summary || excerpt || content || 'Sem descrição'),
    image,
    link: post.link || '#',
    content: sanitizeContent(content),
    raw: post,
  };
}

export async function fetchNews(perPage = 12) {
  const url = `${API_URL}?per_page=${perPage}&orderby=date&order=desc&_embed`;
  try {
    const response = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`WordPress API falhou: ${response.status}`);
    return (await response.json()).map(normalizePost);
  } catch (error) {
    console.error('Erro ao buscar notícias do WordPress:', error);
    return fallbackNews.slice(0, perPage).map((article, index) => ({
      ...article,
      id: index,
      slug: article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      summary: article.description,
      content: `<p>${article.description}</p>`,
    }));
  }
}

export async function fetchNewsBySlug(slug) {
  const url = `${API_URL}?slug=${encodeURIComponent(slug)}&_embed`;
  try {
    const response = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`WordPress API falhou: ${response.status}`);
    const posts = await response.json();
    return posts[0] ? normalizePost(posts[0]) : null;
  } catch (error) {
    console.error('Erro ao buscar notícia do WordPress:', error);
    const fallbackArticle = fallbackNews.find((article) => article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug);
    return fallbackArticle ? normalizePost({
      title: { rendered: fallbackArticle.title },
      excerpt: { rendered: fallbackArticle.description },
      content: { rendered: `<p>${fallbackArticle.description}</p>` },
      date: fallbackArticle.date.split('/').reverse().join('-'),
      featured_image_url: fallbackArticle.image,
      news_tag: fallbackArticle.tag,
      slug,
    }) : null;
  }
}
