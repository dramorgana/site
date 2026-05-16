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
  ],
})
