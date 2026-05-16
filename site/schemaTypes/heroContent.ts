import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroContent',
  title: 'Conteúdo do Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'doctor',
      title: 'Informações do Médico',
      type: 'object',
      fields: [
        { name: 'name', title: 'Nome Completo', type: 'string' },
        { name: 'prefix', title: 'Prefixo (Ex: Dra.)', type: 'string', initialValue: 'Dra.' },
        { name: 'specialty', title: 'Especialidade', type: 'string' },
        { name: 'credentials', title: 'Credenciais (CRM/RQE)', type: 'string' },
      ],
    }),
    defineField({
      name: 'headline',
      title: 'Headline (Título de Impacto)',
      type: 'object',
      fields: [
        { name: 'main', title: 'Texto Principal', type: 'string', description: 'Aceita <br /> para quebra de linha' },
        { name: 'accent', title: 'Texto de Destaque', type: 'string' },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Chamada para Ação (WhatsApp)',
      type: 'object',
      fields: [
        { name: 'text', title: 'Texto do Botão', type: 'string', initialValue: 'Agendar Minha Avaliação' },
        { name: 'phone', title: 'Número do WhatsApp (Com DDD)', type: 'string', description: 'Ex: 5511999999999' },
        { name: 'message', title: 'Mensagem Padrão', type: 'string', description: 'Mensagem que o paciente enviará' },
      ],
    }),
    defineField({
      name: 'background',
      title: 'Imagem de Fundo',
      type: 'object',
      fields: [
        { name: 'image', title: 'Imagem', type: 'image', options: { hotspot: true } },
        { name: 'alt', title: 'Texto Alternativo (SEO)', type: 'string' },
      ],
    }),
  ],
})
