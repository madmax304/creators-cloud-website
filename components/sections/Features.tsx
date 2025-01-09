import { Cloud, Shield, Share2, Clock, Wallet, Zap } from 'lucide-react'

const features = [
  {
    name: 'Automatic Backup',
    description: 'Set it and forget it. We automatically backup new content as you post it.',
    icon: Cloud
  },
  {
    name: 'Secure Storage',
    description: 'Bank-level encryption keeps your content safe and private.',
    icon: Shield
  },
  {
    name: 'Profile Integration',
    description: 'Seamlessly connects with your social profiles for continuous backup.',
    icon: Share2
  },
  {
    name: 'Historical Import',
    description: 'Automatically imports your existing content history.',
    icon: Clock
  },
  {
    name: 'Competitive Pricing',
    description: 'Cost-effective storage solutions that grow with your content.',
    icon: Wallet
  },
  {
    name: 'Quick Recovery',
    description: 'Instantly restore any lost content with just one click.',
    icon: Zap
  }
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to create
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Powerful features to take your content to the next level
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="group relative">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 group-hover:bg-gray-200">
                  <feature.icon className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
              </div>
              <p className="mt-2 text-gray-500 pl-16">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 