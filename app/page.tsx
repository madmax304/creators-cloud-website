import { Button } from '@/components/ui/button'
import { CTA } from '@/components/sections/CTA'
import { Features } from '@/components/sections/Features'
import { Hero } from '@/components/sections/Hero'
import { Integrations } from '@/components/sections/Integrations'
import { PricingTable } from '@/components/sections/PricingTable'
import { FAQ } from '@/components/sections/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Integrations />
      <PricingTable />
      <FAQ />
      <CTA />
    </>
  )
}
