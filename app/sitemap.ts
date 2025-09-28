export default function sitemap() {
  const base = 'https://faculdadefilos.com.br'
  const now = new Date().toISOString()
  return ['', '/home', '/cursos', '/blog', '/faq'].map((p) => ({
    url: `${base}${p || '/'}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.7,
  }))
}
