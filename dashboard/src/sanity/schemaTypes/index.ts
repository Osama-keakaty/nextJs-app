import { type SchemaTypeDefinition } from 'sanity'

 
import {startupType} from './startupType'
 
import {authorType} from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [  startupType,  authorType],
}
