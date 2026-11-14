import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Artigo do Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Artigo',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autora / Autor',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação Oficial',
      type: 'datetime',
      description:
        'Data e hora de publicação do artigo (com fuso horário). Usada no SEO, sitemap e exibição ao leitor.',
      options: {
        dateFormat: 'DD/MM/YYYY',
        timeFormat: 'HH:mm',
        timeStep: 30,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Data de Atualização',
      type: 'datetime',
      description:
        "Data e hora de atualização do artigo. Se preenchida, o texto 'Atualizado em...' será exibido no artigo e utilizado no SEO/Sitemap. Se não informada, o campo não é exibido.",
      options: {
        dateFormat: 'DD/MM/YYYY',
        timeFormat: 'HH:mm',
        timeStep: 30,
      },
    }),
    defineField({
      name: 'medicalReviewedAt',
      title: 'Data da Revisão Médica',
      type: 'date',
      options: {
        dateFormat: 'DD/MM/YYYY',
      },
      description:
        '⚠️ Preencher SOMENTE quando a Dra. Morgana revisar o conteúdo clinicamente. NÃO alterar por correções de ortografia ou formatação. Afeta o campo lastReviewed do schema médico (SEO).',
    }),
    defineField({
      name: 'readTime',
      title: 'Tempo de Leitura (ex: 5 min)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categorias (ex: Emagrecimento, Saúde Metabólica, etc.)',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule: any) => Rule.required().min(1),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo (Breve Descrição)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              title: 'Descrição da Imagem (Acessibilidade)',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Conteúdo do Artigo',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              title: 'Descrição da Imagem (Acessibilidade)',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
        {
          type: 'tableBlock',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagem de Destaque',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Descrição da Imagem (Acessibilidade)',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        }),
      ],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'cta',
      title: 'CTA do Post (Card de Agendamento)',
      type: 'object',
      description: 'Configurações do card de agendamento exibido ao final do post.',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Título do CTA do Post',
          type: 'string',
          description:
            'Título exibido no card de agendamento ao final do post (Ex: Quer uma avaliação individualizada para o seu caso?)',
        }),
        defineField({
          name: 'description',
          title: 'Descrição do CTA do Post',
          type: 'text',
          rows: 3,
          description: 'Descrição exibida no card de agendamento ao final do post',
        }),
      ],
    }),
    defineField({
      name: 'faq',
      title: 'Perguntas Frequentes (FAQ)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          title: 'Item de FAQ',
          fields: [
            {
              name: 'question',
              title: 'Pergunta',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'answer',
              title: 'Resposta',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    {title: 'Normal', value: 'normal'},
                    {title: 'H3', value: 'h3'},
                    {title: 'H4', value: 'h4'},
                    {title: 'Quote', value: 'blockquote'},
                  ],
                  lists: [
                    {title: 'Bullet', value: 'bullet'},
                    {title: 'Numbered', value: 'number'},
                  ],
                  marks: {
                    decorators: [
                      {title: 'Strong', value: 'strong'},
                      {title: 'Emphasis', value: 'em'},
                      {title: 'Underline', value: 'underline'},
                    ],
                  },
                },
              ],
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'references',
      title: 'Referências Bibliográficas',
      description:
        'Adicione as referências do artigo. Use o botão de link para vincular ao artigo original.',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numerada', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Negrito', value: 'strong'},
              {title: 'Itálico', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link Externo',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule: any) =>
                      Rule.uri({
                        allowRelative: false,
                        scheme: ['http', 'https'],
                      }),
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Abrir em nova aba',
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'disclaimer',
      title: 'Aviso / Disclaimer',
      type: 'text',
      rows: 3,
      description:
        'Mensagem de aviso exibida logo abaixo da imagem do post. Deixe em branco para usar o texto padrão.',
      initialValue:
        'Este conteúdo possui caráter meramente educativo e informativo. Não substitui consulta médica. Agende uma avaliação médica para orientação individualizada sobre o seu caso.',
    }),
    defineField({
      name: 'seo',
      title: 'Configurações de SEO e Metatags',
      type: 'reference',
      to: [{type: 'seo'}],
      description:
        'Selecione ou crie um registro de SEO e Metatags para este post. Se não preenchido, os valores padrão do post serão utilizados.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.0',
      author: 'author.name',
      media: 'image',
    },
    prepare({title, category, author, media}) {
      return {
        title,
        subtitle: [category, author].filter(Boolean).join(' • '),
        media,
      }
    },
  },
})

export default postType
