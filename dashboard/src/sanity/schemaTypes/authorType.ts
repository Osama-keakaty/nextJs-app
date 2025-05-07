import {UserIcon} from '@sanity/icons'
import { defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Authors',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'id',
      type: 'number',
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'username',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'url',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
