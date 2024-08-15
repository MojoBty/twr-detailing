export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/', /* add all routes */
      disallow: '/private/',
    },
    sitemap: 'https://localhost/3000/sitemap.xml',
  };
}
