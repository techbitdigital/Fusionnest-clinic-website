import { useEffect } from 'react';

/**
 * useSEO — sets page-level meta tags dynamically for each route.
 * Uses react-helmet-async under the hood via direct DOM manipulation
 * as a lightweight fallback if HelmetProvider is not yet configured.
 *
 * Usage:
 *   useSEO({
 *     title: 'IVF Treatment Lagos | Fusion Nest Fertility Centre',
 *     description: 'Affordable IVF treatment in Lagos...',
 *     canonical: 'https://www.fusionnest.com.ng/ivf-treatment',
 *     ogImage: 'https://www.fusionnest.com.ng/assets/ivf-og.jpg',
 *   });
 */

const BASE_TITLE = 'Fusion Nest Fertility Centre';
const BASE_URL = 'https://www.fusionnest.com.ng';
const DEFAULT_IMAGE = `${BASE_URL}/assets/og-image.jpg`;

const useSEO = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noIndex = false,
}) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} | IVF Clinic Lagos Nigeria`;

    // Page title
    document.title = fullTitle;

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrValue] = selector
          .replace('meta[', '')
          .replace(']', '')
          .replace(/['"]/g, '')
          .split('=');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Primary meta
    if (description) setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="robots"]', 'content', noIndex ? 'noindex, nofollow' : 'index, follow');

    // Canonical
    if (canonical) setLink('canonical', canonical);

    // Open Graph
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    if (description) setMeta('meta[property="og:description"]', 'content', description);
    if (canonical) setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[property="og:image"]', 'content', ogImage);
    setMeta('meta[property="og:type"]', 'content', ogType);

    // Twitter Card
    setMeta('meta[name="twitter:title"]', 'content', fullTitle);
    if (description) setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', ogImage);

    // Cleanup: restore defaults when component unmounts
    return () => {
      document.title = `${BASE_TITLE} | IVF Clinic Lagos Nigeria`;
    };
  }, [title, description, canonical, ogImage, ogType, noIndex]);
};

export default useSEO;
