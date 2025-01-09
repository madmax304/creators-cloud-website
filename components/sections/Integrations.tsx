import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Plus } from 'lucide-react'

const integrations = [
  {
    name: 'TikTok',
    logo: '/tiktok-logo.svg',
    status: 'live',
    description: 'Automatically backup all your TikTok videos and drafts'
  },
  {
    name: 'Instagram',
    logo: '/instagram-logo.svg',
    status: 'coming-soon',
    description: 'Secure storage for your posts, stories, and reels'
  },
  {
    name: 'YouTube',
    logo: '/youtube-logo.svg',
    status: 'coming-soon',
    description: 'Backup your uploaded videos and drafts'
  },
  {
    name: 'X (Twitter)',
    logo: '/x-logo.svg',
    status: 'coming-soon',
    description: 'Archive your media tweets and scheduled content'
  },
  {
    name: 'Facebook',
    logo: '/facebook-logo.svg',
    status: 'coming-soon',
    description: 'Backup photos, videos, and page content'
  },
  {
    name: 'More Platforms',
    Icon: Plus,
    status: 'coming-soon',
    description: 'We\'re continuously adding support for more platforms. Have a request? Let us know!'
  }
]

export function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Backup from any platform
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Secure storage for your content across all major social media platforms
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="relative flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
            >
              <div className="absolute -top-3 right-3">
                <Badge variant={integration.status === 'live' ? 'success' : 'secondary'}>
                  {integration.status === 'live' ? 'Live' : 'Coming Soon'}
                </Badge>
              </div>
              
              <div className="h-12 w-12 relative mb-4">
                {integration.logo ? (
                  <Image
                    src={integration.logo}
                    alt={`${integration.name} backup`}
                    fill
                    className="object-contain"
                  />
                ) : integration.Icon && (
                  <integration.Icon className="h-12 w-12 text-gray-400" />
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900">
                {integration.name}
              </h3>
              
              <p className="mt-2 text-sm text-gray-500 text-center">
                {integration.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 