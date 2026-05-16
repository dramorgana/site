import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contactContent',
  title: 'Seção Contato',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Seção',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'address',
      title: 'Endereço',
      type: 'object',
      fields: [
        { name: 'full', title: 'Endereço Completo', type: 'string' },
        { name: 'short', title: 'Endereço Curto (Cidade/Bairro)', type: 'string' },
      ],
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'object',
      fields: [
        { name: 'number', title: 'Número (apenas dígitos, ex: 5511999999999)', type: 'string' },
        { name: 'display', title: 'Texto de Exibição (ex: (11) 99999-9999)', type: 'string' },
        { name: 'message', title: 'Mensagem Padrão', type: 'string' },
      ],
    }),
    defineField({
      name: 'phone',
      title: 'Telefone Fixo',
      type: 'object',
      fields: [
        { name: 'number', title: 'Número para discagem (ex: +551100000000)', type: 'string' },
        { name: 'display', title: 'Texto de Exibição (ex: (11) 0000-0000)', type: 'string' },
      ],
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
    }),
    defineField({
      name: 'mapUrl',
      title: 'URL do Google Maps (Embed)',
      type: 'url',
      description: 'O link "src" do iframe de incorporação do Google Maps.'
    }),
  ],
})
