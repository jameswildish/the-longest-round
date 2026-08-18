import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'guestRider',
  title: 'Guest Rider',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (r) => r.required(),
      description: 'Used as this rider\'s id everywhere they\'re referenced — in the rider strip, the "Riding Today" card, and daily entries.',
    }),
    defineField({
      name: 'initials',
      title: 'Initials',
      type: 'string',
      description: 'Shown in the rider-strip avatar, e.g. "EH".',
      validation: (r) => r.required().max(3),
    }),
    defineField({
      name: 'profilePic',
      title: 'Profile Picture',
      type: 'image',
      options: {hotspot: true},
      description: 'Headshot shown in rider strips, cards, and the website.',
    }),
    defineField({
      name: 'role',
      title: 'Role / Blurb',
      type: 'string',
      description: 'e.g. "Promoter, joins the send-off from Edinburgh".',
    }),
    defineField({
      name: 'fromStop',
      title: 'Stage Start',
      type: 'reference',
      to: [{type: 'routeStop'}],
    }),
    defineField({
      name: 'toStop',
      title: 'Stage End',
      type: 'reference',
      to: [{type: 'routeStop'}],
    }),
    defineField({
      name: 'joinDay',
      title: 'Join Day',
      type: 'number',
      description: 'Expedition day number this rider joined on.',
    }),
    defineField({name: 'miles', title: 'Stage Miles', type: 'number'}),
    defineField({name: 'durationMinutes', title: 'Duration (minutes)', type: 'number'}),
    defineField({name: 'avgPaceMph', title: 'Average Pace (mph)', type: 'number'}),
    defineField({
      name: 'note',
      title: 'Guest Note / Quote',
      type: 'text',
      description: 'A first-person line from this rider, shown on their own overview.',
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'role', media: 'profilePic'},
  },
})
