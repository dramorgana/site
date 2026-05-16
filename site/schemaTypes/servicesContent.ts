import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'servicesContent',
  title: 'Seção Serviços',
  type: 'document',
  fields: [
    defineField({
      name: 'kicker',
      title: 'Kicker',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'services',
      title: 'Lista de Serviços',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Nome do Serviço', type: 'string' },
            { name: 'text', title: 'Descrição Curta', type: 'text', rows: 2 },
            { name: 'icon', title: 'Ícone (heart, clock, hormone, chart)', type: 'string' },
          ]
        }
      ]
    }),
  ],
})
