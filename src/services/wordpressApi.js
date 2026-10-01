const WORDPRESS_PATH = import.meta.env.VITE_WORDPRESS_URL || '/noticias';

export const WORDPRESS_URL = new URL(WORDPRESS_PATH, window.location.origin)
  .toString()
  .replace(/\/$/, '');
