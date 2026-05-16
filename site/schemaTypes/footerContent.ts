import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'footerContent',
  title: 'Rodapé',
  type: 'document',
  fields: [
    defineField({
      name: 'doctor',
      title: 'Informações da Médica',
      type: 'object',
      fields: [
        { name: 'name', title: 'Nome', type: 'string' },
        { name: 'credentials', title: 'CRM / RQE', type: 'string' },
      ]
    }),
    defineField({
      name: 'address',
      title: 'Endereço',
      type: 'object',
      fields: [
        { name: 'street', title: 'Rua e Número', type: 'string' },
        { name: 'neighborhood', title: 'Bairro', type: 'string' },
        { name: 'cityState', title: 'Cidade/Estado', type: 'string' },
        { name: 'cep', title: 'CEP', type: 'string' },
      ]
    }),
    defineField({
      name: 'links',
      title: 'Links Institucionais',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Rótulo', type: 'string' },
            { name: 'url', title: 'Link', type: 'string' },
          ]
        }
      ]
    }),
    defineField({
      name: 'social',
      title: 'Redes Sociais',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Rede Social', type: 'string' },
            { name: 'url', title: 'Link do Perfil', type: 'string' },
            { name: 'icon', title: 'Ícone (instagram, whatsapp, linkedin, facebook)', type: 'string' },
          ]
        }
      ]
    }),
    defineField({
      name: 'copyrightText',
      title: 'Texto de Copyright',
      type: 'string',
      description: 'O ano será adicionado automaticamente no início.'
    }),
  ],
})
