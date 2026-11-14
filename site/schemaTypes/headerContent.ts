import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'headerContent',
  title: 'Cabeçalho (Header)',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo do Cabeçalho',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto Alternativo (Alt)',
          type: 'string',
          initialValue: 'Dra. Morgana Motta Logo',
        }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Botão de Ação (CTA)',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Texto do Botão', type: 'string'}),
        defineField({name: 'href', title: 'Link (WhatsApp / URL)', type: 'string'}),
      ],
    }),
  ],
  preview: {
    select: {
      media: 'logo',
    },
    prepare({media}) {
      return {
        title: 'Cabeçalho (Header)',
        media,
      }
    },
  },
})

