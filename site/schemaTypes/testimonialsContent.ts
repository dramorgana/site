import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonialsContent',
  title: 'Seção Depoimentos',
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
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'testimonials',
      title: 'Lista de Depoimentos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Nome do Paciente', type: 'string' },
            { name: 'text', title: 'Depoimento', type: 'text', rows: 4 },
            { name: 'meta', title: 'Informação Adicional (ex: Eliminou 12kg)', type: 'string' },
          ]
        }
      ]
    }),
  ],
})
