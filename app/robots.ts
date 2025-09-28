export default function robots() {
  const base = 'https://faculdadefilos.com.br'
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/api/'] }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
