import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'pillarsContent',
  title: 'Seção Pilares',
  type: 'document',
  fields: [
    defineField({
      name: 'intro',
      title: 'Intro/Kicker',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Imagem Lateral',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Texto Alternativo', type: 'string' }
      ]
    }),
    defineField({
      name: 'cta',
      title: 'Botão de Chamada',
      type: 'object',
      fields: [
        { name: 'text', title: 'Texto do Botão', type: 'string' },
        { name: 'url', title: 'Link (ex: #contato)', type: 'string' },
      ]
    }),
    defineField({
      name: 'pillars',
      title: 'Os 3 Pilares',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Título do Pilar', type: 'string' },
            { name: 'text', title: 'Texto Descritivo', type: 'text', rows: 2 },
            { name: 'icon', title: 'Ícone (doc, user, heart)', type: 'string' },
          ]
        }
      ],
      validation: (Rule) => Rule.max(3)
    }),
  ],
})
