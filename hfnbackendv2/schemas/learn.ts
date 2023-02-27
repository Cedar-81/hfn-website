export default {
  name: 'learn',
  type: 'document',
  title: 'Learn',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'url_slug',
      type: 'slug',
      title: 'URL Slug',
      options: {
        source: 'title',
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''),
        validation: (Rule: any) => Rule.required(),
      },
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'user'}],
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Summary',
    },
    {
      name: 'important',
      type: 'boolean',
      title: 'Important',
      readOnly: ({currentUser}: any) => {
        return !currentUser.roles.find(({name}: any) => name === 'administrator')
      },
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'image_alt_text',
      type: 'string',
      title: 'Image Alt Text',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'views',
      type: 'string',
      title: 'View Count',
      readOnly: ({currentUser}: any) => {
        return !currentUser.roles.find(({name}: any) => name === 'administrator')
      },
    },
  ],
}
