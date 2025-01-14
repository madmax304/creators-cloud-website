import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Integrations } from '@/components/sections/Integrations'
import { PricingTable } from '@/components/sections/PricingTable'
import { FAQ } from '@/components/sections/FAQ'
import { SocialProof } from '@/components/sections/SocialProof'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative pt-14">
        <main>
          <Hero />
          <Features />
          <Integrations />
          <PricingTable />
          <FAQ />
          <SocialProof />
          <CTA />
        </main>
      </div>
    </div>
  )
}
