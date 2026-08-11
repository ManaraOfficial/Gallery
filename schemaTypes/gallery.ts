import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery Album',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Album Title',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Curious Minds', value: 'curious-minds' },
          { title: 'Project28', value: 'project28' },
          { title: 'Sponsorship', value: 'sponsorship' },
          { title: 'Other Activities', value: 'other-activities' },
        ],
      },
    }),
    // ⬇️ THIS MUST BE AN ARRAY TO HOLD MULTIPLE IMAGES
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      options: {
        layout: 'grid', // Displays photos in a grid layout
      },
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
  ],
})