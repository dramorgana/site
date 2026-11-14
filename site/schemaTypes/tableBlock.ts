import {defineArrayMember, defineField, defineType} from 'sanity'

export const tableBlock = defineType({
  name: 'tableBlock',
  title: 'Tabela',
  type: 'object',
  fields: [
    defineField({
      name: 'caption',
      title: 'Legenda (opcional)',
      type: 'string',
      description: 'Legenda exibida abaixo ou acima da tabela, se desejar.',
    }),
    defineField({
      name: 'headers',
      title: 'Cabeçalhos das colunas',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'rows',
      title: 'Linhas da tabela',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'tableRow',
          title: 'Linha',
          type: 'object',
          fields: [
            defineField({
              name: 'cells',
              title: 'Células',
              type: 'array',
              of: [defineArrayMember({type: 'text', rows: 2})],
              validation: (rule) => rule.required().min(1),
            }),
          ],
          preview: {
            select: {cells: 'cells'},
            prepare({cells}: {cells?: string[]}) {
              return {
                title: Array.isArray(cells) && cells.length > 0 ? cells.join(' | ') : 'Linha vazia',
              }
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      caption: 'caption',
      headers: 'headers',
      rows: 'rows',
    },
    prepare({
      caption,
      headers,
      rows,
    }: {
      caption?: string
      headers?: string[]
      rows?: unknown[]
    }) {
      const colCount = Array.isArray(headers) ? headers.length : 0
      const rowCount = Array.isArray(rows) ? rows.length : 0
      return {
        title: caption || (Array.isArray(headers) && headers.length > 0 ? headers.join(' | ') : 'Tabela'),
        subtitle: `Tabela (${colCount} colunas, ${rowCount} linhas)`,
      }
    },
  },
})

