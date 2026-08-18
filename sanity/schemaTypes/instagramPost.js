import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'instagramPost',
  title: 'Instagram Post',
  type: 'document',
  fields: [
    defineField({
      name: 'url',
      title: 'Post URL',
      type: 'url',
      validation: (r) => r.required().uri({scheme: ['https']}).custom((url) => {
        if (!url) return true
        return url.includes('instagram.com/') ? true : 'Must be an Instagram URL'
      }),
      description: 'Paste the Instagram post URL, e.g. https://www.instagram.com/p/ABC123/',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
  ],
  orderings: [
    {title: 'Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'url', subtitle: 'order'},
    prepare({title, subtitle}) {
      const shortUrl = title ? title.replace('https://www.instagram.com', '') : 'No URL'
      return {title: shortUrl, subtitle: subtitle != null ? 'Order: ' + subtitle : ''}
    },
  },
})
