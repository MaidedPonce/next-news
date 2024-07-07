interface AvatarUrls {
  '24': string
  '48': string
  '96': string
}

interface Link {
  href: string
}

interface Links {
  self: Link[]
  collection: Link[]
}

export interface AuthorProps {
  id: number
  name: string
  url: string
  description: string
  link: string
  slug: string
  avatar_urls: AvatarUrls
  meta: any[]
  acf: any[]
  _links: Links
}
