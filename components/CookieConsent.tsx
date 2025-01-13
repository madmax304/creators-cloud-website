'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent')
    if (!hasConsented) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
            <a href="/privacy" className="text-indigo-600 hover:text-indigo-500">
              Learn more
            </a>
          </p>
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsVisible(false)}
            >
              Decline
            </Button>
            <Button 
              size="sm" 
              onClick={acceptCookies}
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 