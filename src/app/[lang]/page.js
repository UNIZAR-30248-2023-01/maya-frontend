'use client'

import { CTA } from '@/components/landing/cta'
import { Hero } from '@/components/landing/hero'
import { LogoCloud } from '@/components/landing/logo-cloud'
import { Stats } from '@/components/landing/stats'
import { Footer } from '@/components/landing/footer'
import { Feature1, Feature2 } from '@/components/landing/features'

export default function page () {
  return (
    <div className="bg-gray-900">
      <main>
        <Hero />
        <LogoCloud />
        <Feature1/>
        <Feature2/>
        <Stats/>
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
