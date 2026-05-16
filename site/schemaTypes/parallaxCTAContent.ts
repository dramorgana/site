import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'parallaxCTAContent',
  title: 'Seção Chamada Final (Parallax)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título de Impacto',
      type: 'string',
    }),
    defineField({
      name: 'bgImage',
      title: 'Imagem de Fundo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'text',
      title: 'Texto de Apoio',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'cta',
      title: 'Botão de Chamada',
      type: 'object',
      fields: [
        { name: 'text', title: 'Texto do Botão', type: 'string' },
        { name: 'url', title: 'Link (ex: WhatsApp)', type: 'string' },
      ]
    }),
  ],
})
