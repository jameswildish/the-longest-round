import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'leadRider',
  title: 'Lead Rider',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'initials',
      title: 'Initials',
      type: 'string',
      validation: (r) => r.required().max(3),
    }),
    defineField({
      name: 'profilePic',
      title: 'Profile Picture',
      type: 'image',
      options: {hotspot: true},
      description: 'Headshot shown in the app header, rider strip, and website.',
    }),
  ],
  preview: {
    select: {title: 'name', media: 'profilePic'},
  },
})
