export default function sitemap() {
  return [
    {
      url: 'https://localhost:3000',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
