export interface PostInterface {
  id: number
  date: string
  date_gmt: string
  guid: {
    rendered: string
  }
  modified: string
  modified_gmt: string
  slug: string
  status: 'publish' | 'draft' | 'pending' | 'private'
  type: 'post' | 'page'
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  author: number
  featured_media: number
  comment_status: 'open' | 'closed'
  ping_status: 'open' | 'closed'
  sticky: boolean
  template: string
  format:
    | 'standard'
    | 'aside'
    | 'chat'
    | 'gallery'
    | 'link'
    | 'image'
    | 'quote'
    | 'status'
    | 'video'
    | 'audio'
  meta: any[]
  categories: number[]
  tags: number[]
  jetpack_publicize_connections: any[]
  acf: any[]
  aioseo_notices: any[]
  jetpack_sharing_enabled: boolean
  jetpack_featured_media_url: string
  jetpack_shortlink: string
  _links: {
    self: {
      href: string
    }
    collection: {
      href: string
    }
    about: {
      href: string
    }
    author: Array<{
      embeddable: boolean
      href: string
    }>
    version_history: Array<{
      count: number
      href: string
    }>
    wp_attachment: Array<{
      href: string
    }>
    curies: Array<{
      name: string
      href: string
      templated: boolean
    }>
  }
}
