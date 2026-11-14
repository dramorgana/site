import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'crm',
      title: 'CRM',
      type: 'string',
      description: 'Ex: CRM-MG 96204',
    }),
    defineField({
      name: 'specialty',
      title: 'Especialidade / Subtítulo',
      type: 'string',
    }),
    defineField({
      name: 'jobTitle',
      title: 'Cargo / Profissão (Schema.org)',
      type: 'string',
      description: 'Ex: Médica',
      initialValue: 'Médica',
    }),
    defineField({
      name: 'url',
      title: 'URL da Página Sobre / Perfil (Schema.org)',
      type: 'url',
      description: 'Ex: https://www.dramorganamotta.com.br/#about',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
