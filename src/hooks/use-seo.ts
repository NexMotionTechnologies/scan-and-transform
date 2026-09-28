import { useEffect } from 'react';

const SITE_URL = 'https://mypampiri.co.za';
const DEFAULT_IMAGE = `${SITE_URL}/pampiri-og-image.png`;

interface SeoOptions {
  title: string;
  description: string;
  /** Route path, e.g. '/contact'. Defaults to the homepage. */
  path?: string;
  /** Set true on pages that shouldn't be indexed (e.g. 404). */
  noindex?: boolean;
}

/**
 * Pampiri's landing page is a client-rendered SPA with a single static
 * index.html, so every route otherwise ships the homepage's <title>/description
 * to search engines and social previews. This hook overrides them per-route.
 */
export function useSeo({ title, description, path = '/', noindex = false }: SeoOptions) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const url = `${SITE_URL}${path}`;

    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', DEFAULT_IMAGE);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', DEFAULT_IMAGE);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, path, noindex]);
}
