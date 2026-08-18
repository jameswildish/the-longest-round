import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'locationUpdate',
  title: 'Current Location Update',
  type: 'document',
  description: 'Darren\'s current GPS position. Update this whenever his location changes — the website map reads the latest entry to place the live dot.',
  fields: [
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
      validation: (r) => r.required().min(-180).max(180),
    }),
    defineField({
      name: 'note',
      title: 'Note',
      type: 'string',
      description: 'Optional short note, e.g. "Approaching Dover" or "Rest stop near Lyon".',
    }),
  ],
  preview: {
    select: {lat: 'lat', lng: 'lng', note: 'note'},
    prepare({lat, lng, note}) {
      return {title: note || `${lat}, ${lng}`, subtitle: `${lat}, ${lng}`}
    },
  },
})
