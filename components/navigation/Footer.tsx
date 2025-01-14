import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4" aria-label="Footer">
          <Link 
            href="/#features" 
            className="text-sm leading-6 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Features
          </Link>
          <Link 
            href="/#integrations" 
            className="text-sm leading-6 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Integrations
          </Link>
          <Link 
            href="/#pricing" 
            className="text-sm leading-6 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Pricing
          </Link>
          <Link 
            href="/#faq" 
            className="text-sm leading-6 text-gray-600 hover:text-gray-900 transition-colors"
          >
            FAQ
          </Link>
          <Link 
            href="/blog" 
            className="text-sm leading-6 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Blog
          </Link>
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          <Link 
            href="/privacy" 
            className="text-sm leading-6 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms" 
            className="text-sm leading-6 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Terms
          </Link>
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} PALGORITHM LLC DBA Creator&apos;s Cloud. All rights reserved.
        </p>
      </div>
    </footer>
  )
} 