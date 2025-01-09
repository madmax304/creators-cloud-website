'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl hover:text-indigo-600 transition-colors">
              Creator&apos;s Cloud
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              ['Features', '#features'],
              ['Integrations', '#integrations'],
              ['Pricing', '#pricing'],
              ['FAQs', '#faq']
            ].map(([name, href]) => (
              <Link
                key={name}
                href={href}
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 relative group transition-colors"
              >
                {name}
                <span className="absolute inset-x-0 bottom-[-17px] h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://app.creators-cloud.com/login"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Log In
            </Link>
            
            <Button 
              asChild
              className="hover:bg-indigo-700 transition-colors"
            >
              <Link href="https://app.creators-cloud.com/signup">
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
} 