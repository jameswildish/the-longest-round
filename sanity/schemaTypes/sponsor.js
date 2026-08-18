import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'sponsor',
  title: 'Sponsor / Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Upload a logo image. PNG with transparent background works best.',
      options: {hotspot: false},
    }),
    defineField({
      name: 'url',
      title: 'Website URL',
      type: 'url',
      description: 'Optional link to the sponsor or partner website.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {title: 'Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'name', media: 'logo'},
  },
})
