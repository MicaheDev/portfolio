import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(10),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MM/YYYY',
      },
      validation: (Rule) => Rule.required(),
    }),
    
    defineField({
      name: 'preview',
      title: 'Preview',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          options: {
            isHighlighted: true,
          },
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          options: {
            isHighlighted: true,
          },
        },
      ],
    }),
    defineField({
      name: 'image2',
      title: 'image2',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          options: {
            isHighlighted: true,
          },
        },
      ],
    }),

    defineField({
      name: 'problem',
      title: 'Problem Description',
      type: 'text',
      validation: (Rule) => Rule.min(10),
    }),
    defineField({
      name: 'solution',
      title: 'Solution Description',
      type: 'text',
      validation: (Rule) => Rule.min(10),
    }),
    defineField({
      name: 'impact',
      title: 'Impact Description',
      type: 'text',
      validation: (Rule) => Rule.min(10),
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
