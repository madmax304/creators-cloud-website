import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTA() {
  return (
    <section className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Protect your content today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Don&apos;t wait until it&apos;s too late. Start backing up your valuable content now.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
              <Link href="https://app.creatorscloud.com/signup">
                Start Free Trial
              </Link>
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-gray-800" asChild>
              <Link href="#features">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 