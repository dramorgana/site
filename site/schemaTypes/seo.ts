import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO & Metadados',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Título SEO (Meta Title)',
      type: 'string',
      description: 'Ideal entre 50 e 60 caracteres. Se vazio, usa o título do artigo.',
      validation: (Rule) =>
        Rule.max(70).warning('Títulos acima de 60–70 caracteres podem ser cortados no Google.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Descrição SEO (Meta Description)',
      type: 'text',
      rows: 3,
      description: 'Resumo que aparece no Google. Ideal entre 140 e 160 caracteres.',
      validation: (Rule) =>
        Rule.max(165).warning('Descrições acima de 160 caracteres costumam ser cortadas no Google.'),
    }),
    defineField({
      name: 'keywords',
      title: 'Palavras-chave (Keywords)',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      description: 'Termos principais de busca para este conteúdo.',
    }),
    defineField({
      name: 'ogImage',
      title: 'Imagem de Compartilhamento (Open Graph)',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Recomendado 1200×630px para WhatsApp/Instagram/LinkedIn. Se vazio, usa a imagem principal.',
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'URL Canônica (Opcional)',
      type: 'url',
      description: 'Preencha apenas se precisar apontar para outra URL principal.',
    }),
    defineField({
      name: 'noIndex',
      title: 'Ocultar dos buscadores (noindex)',
      type: 'boolean',
      initialValue: false,
      description: 'Ative apenas se não quiser que esta página apareça no Google.',
    }),
  ],
})
