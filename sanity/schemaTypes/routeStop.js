import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'routeStop',
  title: 'Route Stop',
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
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Stop', value: 'stop'},
          {title: 'Swim Crossing', value: 'swim'},
        ],
        layout: 'radio',
      },
      initialValue: 'stop',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Position along the route, starting from 0 at Edinburgh.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'arrivalTime',
      title: 'Date',
      type: 'datetime',
      description: 'The site treats the latest stop already reached as "current".',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude',
      type: 'number',
      validation: (r) => r.required().min(-90).max(90),
    }),
    defineField({
      name: 'lng',
      title: 'Longitude',
      type: 'number',
      description: 'Note: the public site\'s map was clipped to roughly 34–58°N, 9°W–5°E. A stop well outside that window will need the coastline re-exported for the new bounds.',
      validation: (r) => r.required().min(-180).max(180),
    }),
  ],
  orderings: [
    {title: 'Route Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'name', subtitle: 'type'},
  },
})
