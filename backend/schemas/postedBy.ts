import {SchemasType} from './interfaces'

const PostedBy: SchemasType = {
  name: 'postedBy',
  title: 'PostedBy',
  type: 'reference',
  to: [{type: 'user'}],
}

export default PostedBy
