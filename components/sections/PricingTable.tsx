import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export function PricingTable() {
  const tiers = [
    {
      name: 'Free',
      id: 'free',
      href: 'https://app.thecreatorscloud.com/sign-up',
      price: { monthly: '$0', yearly: '$0' },
      description: 'Perfect for getting started and testing the waters.',
      features: [
        '100MB Storage',
        'Manual Backups',
        'Community Support',
      ],
      featured: false,
      cta: 'Start Free'
    },
    {
      name: 'Essential',
      id: 'essential',
      href: 'https://app.thecreatorscloud.com/sign-up',
      price: { monthly: '$1', yearly: '$12' },
      description: 'Everything you need to grow your content library.',
      features: [
        '1GB Storage',
        'Automated Backups',
        'Email Support',
      ],
      featured: true,
      cta: 'Start Essential'
    },
    {
      name: 'Pro',
      id: 'pro',
      href: 'https://app.thecreatorscloud.com/sign-up',
      price: { monthly: '$2.5', yearly: '$30' },
      description: 'More storage for growing creators.',
      features: [
        '10GB Storage',
        'Automated Backups',
        'Priority Support',
      ],
      featured: false,
      cta: 'Start Pro'
    },
    {
      name: 'Pro Plus',
      id: 'pro-plus',
      href: 'https://app.thecreatorscloud.com/sign-up',
      price: { monthly: '$5', yearly: '$60' },
      description: 'Advanced features for professional creators.',
      features: [
        '100GB Storage',
        'Automated Backups',
        'Premium Support',
      ],
      featured: false,
      cta: 'Start Pro Plus'
    }
  ]

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the perfect plan for your needs
          </p>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-x-6 xl:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                tier.featured ? 'bg-gray-900 ring-gray-900' : 'ring-gray-200',
                'rounded-3xl p-6 ring-1 xl:p-8 relative'
              )}
            >
              {tier.id === 'essential' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-1 text-xs font-medium text-white ring-1 ring-inset ring-indigo-600">
                    Most Popular
                  </span>
                </div>
              )}

              {tier.id === 'pro-plus' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-green-600 px-4 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600">
                    Best Value
                  </span>
                </div>
              )}

              <h3
                className={cn(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-lg font-semibold leading-8'
                )}
              >
                {tier.name}
              </h3>
              <p
                className={cn(
                  tier.featured ? 'text-gray-300' : 'text-gray-600',
                  'mt-4 text-sm leading-6'
                )}
              >
                {tier.description}
              </p>
              <p className="mt-6 flex flex-col items-baseline gap-x-1">
                <span
                  className={cn(
                    tier.featured ? 'text-white' : 'text-gray-900',
                    'text-4xl font-bold tracking-tight'
                  )}
                >
                  {tier.price.yearly}
                </span>
                <span
                  className={cn(
                    tier.featured ? 'text-gray-300' : 'text-gray-600',
                    'text-sm font-semibold leading-6'
                  )}
                >
                  /year
                </span>
                <span
                  className={cn(
                    tier.featured ? 'text-gray-300' : 'text-gray-500',
                    'text-sm leading-6 mt-1'
                  )}
                >
                  {tier.price.yearly === '$0' 
                    ? 'Free forever'
                    : `$${Number(tier.price.monthly.replace('$', ''))} per month billed annually`}
                </span>
              </p>
              <ul
                className={cn(
                  tier.featured ? 'text-gray-300' : 'text-gray-600',
                  'mt-8 space-y-3 text-sm leading-6'
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className={cn(
                        tier.featured ? 'text-white' : 'text-indigo-600',
                        'h-6 w-5 flex-none'
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.featured ? 'default' : 'outline'}
                className={cn(
                  'mt-8 w-full py-6 font-semibold', 
                  tier.featured 
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-indigo-600 text-white hover:bg-indigo-500 border-0'
                )}
                asChild
              >
                <Link 
                  href={tier.href}
                  className="flex items-center justify-center"
                >
                  {tier.cta}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 