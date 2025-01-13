import { CTA } from '@/components/sections/CTA'
import { Features } from '@/components/sections/Features'
import { Hero } from '@/components/sections/Hero'
import { Integrations } from '@/components/sections/Integrations'
import { PricingTable } from '@/components/sections/PricingTable'
import { FAQ } from '@/components/sections/FAQ'
import { SocialProof } from '@/components/sections/SocialProof'

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Features />
      <Integrations />
      <PricingTable />
      <FAQ />
      <CTA />
    </>
  )
}
