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
      name: 'fullJourney',
      title: 'Riding the Full Journey',
      type: 'boolean',
      description: 'Tick if this rider is with Darren for the entire route, not just one stage. Stage Start/End, Join Day, Stage Miles and Duration below can be left blank.',
      initialValue: false,
    }),
    defineField({
      name: 'fromStop',
      title: 'Stage Start',
      type: 'reference',
      to: [{type: 'routeStop'}],
      description: 'Leave blank if riding the full journey.',
      hidden: ({parent}) => !!parent?.fullJourney,
    }),
    defineField({
      name: 'toStop',
      title: 'Stage End / Stops At',
      type: 'reference',
      to: [{type: 'routeStop'}],
      description: 'For a stage guest, where their stage ends. For a full-journey rider, only set this if they stop partway rather than finishing the whole route — leave blank if they\'re going all the way to Morocco.',
    }),
    defineField({
      name: 'joinDay',
      title: 'Join Day',
      type: 'number',
      description: 'Expedition day number this rider joined on.',
    }),
    defineField({
      name: 'miles',
      title: 'Stage Miles',
      type: 'number',
      description: 'Leave blank if riding the full journey — total miles come from Daily Entries instead.',
      hidden: ({parent}) => !!parent?.fullJourney,
    }),
    defineField({
      name: 'durationMinutes',
      title: 'Duration (minutes)',
      type: 'number',
      hidden: ({parent}) => !!parent?.fullJourney,
    }),
    defineField({name: 'avgPaceMph', title: 'Average Pace (mph)', type: 'number'}),
    defineField({
      name: 'note',
      title: 'Guest Note / Quote',
      type: 'text',
      description: 'A first-person line from this rider, shown on their own overview.',
    }),
  ],
  preview: {
    select: {title: 'name', media: 'profilePic'},
  },
})
