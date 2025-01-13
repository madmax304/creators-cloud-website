import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTA() {
  return (
    <section className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            <span className="block">Ready to keep your media secure?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Don&apos;t wait until it&apos;s too late. Start backing up valuable social media content now.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center lg:mt-0 lg:flex-shrink-0">
          <Button size="lg" asChild>
            <Link href="https://app.thecreatorscloud.com/sign-up">
              Sign Up Free
            </Link>
          </Button>
          <p className="mt-2 text-sm text-gray-400">
            No credit card required
          </p>
        </div>
      </div>
    </section>
  )
} 