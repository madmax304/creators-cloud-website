import Link from 'next/link'
import { Button } from '@/components/ui/button'

const tiers = [
  {
    name: 'Basic',
    price: '0',
    priceDetail: 'Free forever',
    monthlyBreakdown: '$0/mo',
    description: 'Perfect for trying out the service',
    features: [
      '1GB secure storage',
      'Automatic backup',
      'Basic recovery tools',
      '30-day backup history'
    ],
  },
  {
    name: 'Essential',
    price: '60',
    priceDetail: '/year',
    monthlyBreakdown: '$5/mo',
    description: 'For creators who need more storage',
    features: [
      '100GB secure storage',
      'Automatic backup',
      'Priority recovery support',
      'Unlimited backup history',
      'Advanced encryption'
    ],
    banner: 'Most Popular'
  },
  {
    name: 'Pro',
    price: '120',
    priceDetail: '/year',
    monthlyBreakdown: '$10/mo',
    description: 'For professional creators',
    features: [
      '1TB secure storage',
      'Automatic backup',
      'Priority recovery support',
      'Unlimited backup history',
      'Advanced encryption',
      'API access'
    ],
    banner: 'Best Value'
  }
]

export function PricingTable() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Annual billing only. Select the perfect plan for your storage needs.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="relative flex flex-col rounded-3xl bg-white shadow-xl"
            >
              {tier.banner && (
                <div className="absolute -top-5 inset-x-0 flex justify-center">
                  <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold leading-5 text-white shadow-sm">
                    {tier.banner}
                  </span>
                </div>
              )}
              <div className="p-8 sm:p-10">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                  ${tier.price}
                  <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                    {tier.priceDetail}
                  </span>
                </div>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {tier.monthlyBreakdown} billed annually
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {tier.description}
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-between p-8 sm:p-10">
                <ul role="list" className="space-y-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-indigo-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-7 text-gray-600">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    variant={tier.name === 'Basic' ? 'outline' : 'default'}
                    className="w-full"
                    asChild
                  >
                    <Link href="https://app.creators-cloud.com/signup">
                      {tier.name === 'Basic' ? 'Start Free' : 'Get Started'}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 