export interface SchemasType {
  name: string
  title: string
  type: string
  fields?: SchemasType[]
  options?: Record<string, any>
  of?: {type: string}[]
  to?: {type: string}[]
}
