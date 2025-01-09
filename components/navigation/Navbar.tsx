'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl">
              Creator's Cloud
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#integrations" className="text-gray-600 hover:text-gray-900">
              Integrations
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-gray-900">
              FAQ
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="https://app.creatorscloud.com/signin">
                Sign In
              </Link>
            </Button>
            <Button asChild>
              <Link href="https://app.creatorscloud.com/signup">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
} 