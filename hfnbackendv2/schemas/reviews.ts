export default {
  name: 'review',
  type: 'document',
  title: 'Review',
  fields: [
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'user'}],
    },
    {
      title: 'Content',
      name: 'content',
      type: 'text',
    },
  ],
}
