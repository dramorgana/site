import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutContent',
  title: 'Seção Sobre (About)',
  type: 'document',
  fields: [
    defineField({
      name: 'kicker',
      title: 'Kicker (Texto acima do título)',
      type: 'string',
      initialValue: 'Autoridade & Acolhimento'
    }),
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      initialValue: 'Uma abordagem humana para resultados reais.'
    }),
    defineField({
      name: 'description',
      title: 'Descrição Curta',
      type: 'text',
      initialValue: 'Unindo ciência, tecnologia e empatia para transformar sua saúde de forma definitiva.'
    }),
    defineField({
      name: 'paragraphs',
      title: 'Parágrafos de Texto',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'highlights',
      title: 'Destaques (Lista)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Imagem da Médica',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Texto Alternativo', type: 'string' }
      ]
    }),
    defineField({
      name: 'video',
      title: 'Vídeo da Médica (Hover / Transição)',
      type: 'file',
      options: {
        accept: 'video/*'
      },
      fields: [
        {
          name: 'alt',
          title: 'Texto Alternativo (aria-label)',
          type: 'string',
          description: 'Descrição curta do vídeo para leitores de tela.'
        },
        {
          name: 'description',
          title: 'Descrição Detalhada (Acessibilidade)',
          type: 'text',
          rows: 2,
          description: 'Descrição detalhada da cena do vídeo para acessibilidade.'
        }
      ]
    }),
    defineField({
      name: 'doctor',
      title: 'Dados da Médica (Rodapé)',
      type: 'object',
      fields: [
        { name: 'name', title: 'Nome', type: 'string' },
        { name: 'prefix', title: 'Prefixo', type: 'string' },
        { name: 'specialty', title: 'Especialidade', type: 'string' },
      ]
    })
  ],
})
