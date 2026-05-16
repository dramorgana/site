import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'faqContent',
  title: 'Seção FAQ',
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
      name: 'questions',
      title: 'Perguntas Frequentes',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          fields: [
            { name: 'question', title: 'Pergunta', type: 'string' },
            { name: 'answer', title: 'Resposta', type: 'text', rows: 4 },
          ],
        },
      ],
    }),
  ],
})
