import { Navbar } from '@/components/navigation/Navbar'
import { Features } from '@/components/sections/Features'
import { PricingTable } from '@/components/sections/PricingTable'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/navigation/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Integrations } from '@/components/sections/Integrations'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
              Your Content, Securely Backed Up
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
              Automatic backup for your social media content. Never lose a post, story, or memory again.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="https://app.creatorscloud.com/signup">
                  Start Backing Up
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Features />
        <Integrations />
        <PricingTable />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
