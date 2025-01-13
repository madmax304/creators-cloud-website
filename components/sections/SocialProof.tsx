'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref)
  const count = useMotionValue(0)
  const rounded = useSpring(count, { stiffness: 200, damping: 20 })

  useEffect(() => {
    if (inView) {
      count.set(value)
    }
  }, [count, inView, value])

  useEffect(() => {
    return rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toLocaleString()
      }
    })
  }, [rounded])

  return <span ref={ref} />
}

export function SocialProof() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Targeting creators worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Join fellow creators who trust us with their content
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-3">
            <div className="flex flex-col bg-gray-50 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Active Creators</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                <Counter value={10} />+
              </dd>
            </div>
            <div className="flex flex-col bg-gray-50 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Posts Backed Up</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                <Counter value={1000} />+
              </dd>
            </div>
            <div className="flex flex-col bg-gray-50 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Data Secured</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                <Counter value={5} />TB+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
} 