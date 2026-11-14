import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO e Metatags',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Identificação Interna (Ex: SEO - Dieta Sozinha)',
      type: 'string',
      description: 'Nome para identificar facilmente este registro no painel do Sanity.',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description:
        'Título exibido na aba do navegador e no Google. Ex: Por que a dieta sozinha não emagrece? | Dra. Morgana Motta',
      validation: (Rule: any) =>
        Rule.max(70).warning('Títulos acima de 60–70 caracteres podem ser cortados no Google.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Descrição para motores de busca (Google). Recomendado até 160 caracteres.',
      validation: (Rule: any) =>
        Rule.max(165).warning('Descrições acima de 160 caracteres costumam ser cortadas no Google.'),
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'URL Canônica Personalizada',
      type: 'url',
      description:
        'Deixe em branco para usar o padrão (https://www.dramorganamotta.com.br/blog/[slug]).',
    }),
    defineField({
      name: 'noIndex',
      title: 'Ocultar dos Motores de Busca (noindex)',
      type: 'boolean',
      description: 'Marque apenas se não quiser que esta página apareça no Google.',
      initialValue: false,
    }),
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title (Redes Sociais)',
      type: 'string',
      description: 'Título para compartilhamento no WhatsApp, Facebook, LinkedIn.',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description (Redes Sociais)',
      type: 'text',
      rows: 2,
      description: 'Descrição para compartilhamento em redes sociais.',
    }),
    defineField({
      name: 'ogImage',
      title: 'Imagem Open Graph / Social Media',
      type: 'image',
      options: {hotspot: true},
      description:
        'Imagem personalizada para redes sociais (1200×630px). Se não enviada, a imagem principal do post será usada.',
    }),
    defineField({
      name: 'sectionCategory',
      title: 'Seção / Categoria SEO',
      type: 'string',
      description: 'Ex: Saúde Metabólica',
    }),
    defineField({
      name: 'keywords',
      title: 'Palavras-chave (Keywords)',
      type: 'string',
      description:
        'Palavras-chave separadas por vírgula. Ex: emagrecimento, saúde metabólica, dieta, metabolismo',
    }),
    defineField({
      name: 'reviewerName',
      title: 'Revisor Médico (Nome)',
      type: 'string',
      description:
        'Ex: Dra. Morgana Motta. Usado no SEO (E-E-A-T) para indicar quem validou o artigo. Se não preenchido, será o autor.',
    }),
    defineField({
      name: 'inLanguage',
      title: 'Idioma (Schema.org)',
      type: 'string',
      description: 'Ex: pt-BR',
      initialValue: 'pt-BR',
    }),
  ],
  preview: {
    select: {
      title: 'internalTitle',
      metaTitle: 'metaTitle',
      subtitle: 'metaDescription',
      media: 'ogImage',
    },
    prepare({title, metaTitle, subtitle, media}) {
      return {
        title: title || metaTitle || 'SEO sem título',
        subtitle,
        media,
      }
    },
  },
})
