import { MetadataRoute } from 'next'

export default function sitemap() {
  return [
    {
      url: 'https://www.thecreatorscloud.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.thecreatorscloud.com/privacy',
      lastModified: new Date(),
    },
    {
      url: 'https://www.thecreatorscloud.com/terms',
      lastModified: new Date(),
    },
  ]
} 