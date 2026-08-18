import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteConfig',
  title: 'Site Config',
  type: 'document',
  fields: [
    defineField({
      name: 'instagramToken',
      title: 'Instagram Access Token',
      type: 'string',
      description: 'Long-lived token from the Meta developer portal. Expires every 60 days — refresh it before then.',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Config'}
    },
  },
})
