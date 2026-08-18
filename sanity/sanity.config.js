import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'the-longest-round',
  title: 'The Longest Round',

  // Fill in after `sanity init` (or from sanity.io/manage) — send this
  // value back and the app/site fetch layer can go live immediately.
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
