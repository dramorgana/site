import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogContent',
  title: 'Seção Blog (Cabeçalho)',
  type: 'document',
  fields: [
    {
      name: 'kicker',
      title: 'Kicker (Texto pequeno acima do título)',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Título da Seção',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descrição da Seção',
      type: 'text',
      rows: 3,
    },
    defineField({
      name: 'viewAllLabel',
      title: 'Rótulo do Botão "Ver todos"',
      type: 'string',
    }),
    defineField({
      name: 'defaultAuthorAvatar',
      title: 'Avatar da Autora nos Cards (opcional)',
      type: 'image',
      description:
        'Se preenchido, substitui a foto da autora nos cards da seção Blog. Caso contrário, usa a foto cadastrada no perfil da Autora.',
      options: {
        hotspot: true,
      },
    }),
  ],
})
