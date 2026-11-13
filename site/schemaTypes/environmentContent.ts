import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'environmentContent',
  title: 'Seção Ambiente (Environment)',
  type: 'document',
  fields: [
    defineField({
      name: 'titleLine1',
      title: 'Título (Linha 1)',
      type: 'string',
      initialValue: 'Tudo isso somado',
    }),
    defineField({
      name: 'titleLine2',
      title: 'Título (Linha 2)',
      type: 'string',
      initialValue: 'a um ambiente',
    }),
    defineField({
      name: 'highlight',
      title: 'Palavra em Destaque',
      type: 'string',
      initialValue: 'acolhedor',
    }),
    defineField({
      name: 'photos',
      title: 'Fotos do Ambiente (Polaroids)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'caption', title: 'Legenda (ex: Recepção, Conforto)', type: 'string' },
            { name: 'alt', title: 'Texto Alternativo', type: 'string' },
            { name: 'image', title: 'Imagem', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    }),
  ],
})

