import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  name: 'default',
  title: 'portfolio-content',

  projectId: 'f45pbqxn',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    colorInput(), // Agrega el plugin de color input
  ],

  schema: {
    types: schemaTypes,
  },
})
