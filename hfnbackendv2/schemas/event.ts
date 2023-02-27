export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'start_datetime',
      type: 'datetime',
      title: 'Start Date and Time',
    },
    {
      //add requriement to check if endtime is greater than start time
      //auto delete events that has passed(dont know if its necessary tho)
      name: 'end_datetime',
      type: 'datetime',
      title: 'End Date and Time',
    },
    {
      name: 'virtual',
      type: 'boolean',
      title: 'Virtual',
      hidden: ({document}: any) => document?.in_person || document?.hybrid,
    },
    {
      name: 'in_person',
      type: 'boolean',
      title: 'In Person',
      hidden: ({document}: any) => document?.hybrid || document?.virtual,
    },
    {
      name: 'hybrid',
      type: 'boolean',
      title: 'Hybrid',
      hidden: ({document}: any) => document?.in_person || document?.virtual,
    },
    {
      name: 'registerd',
      type: 'boolean',
      title: 'Registered',
      readOnly: ({currentUser}: any) => {
        return !currentUser.roles.find(({name}: any) => name === 'administrator')
      },
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: 'details',
      type: 'text',
      title: 'Details',
      validation: (Rule: any) => Rule.min(10).max(80),
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
  ],
}
