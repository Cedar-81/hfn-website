export default {
  name: 'user',
  type: 'document',
  title: 'User',
  readOnly: ({currentUser}: any) => {
    return !currentUser.roles.find(({name}: any) => name === 'administrator')
  },
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'image',
      type: 'string',
      title: 'Image',
    },
    {
      name: 'token',
      type: 'string',
      title: 'Token',
    },
  ],
}
