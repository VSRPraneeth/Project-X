import {SchemasType} from './interfaces'

const Save: SchemasType = {
  name: 'save',
  title: 'Save',
  type: 'document',
  fields: [
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    {
      name: 'userId',
      title: 'UserId',
      type: 'string',
    },
  ],
}

export default Save
