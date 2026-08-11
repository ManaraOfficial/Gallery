import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'report',
  title: 'Reports & Documents',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Report Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Curious Minds', value: 'curious-minds' },
          { title: 'Project 28', value: 'project28' },
          { title: 'Sponsorship', value: 'sponsorship' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
    }),
    defineField({
      name: 'description',
      title: 'Short Summary / Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'file',
      title: 'PDF / Document File',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})