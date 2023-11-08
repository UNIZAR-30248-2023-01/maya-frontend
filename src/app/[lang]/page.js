import { CTA } from '@/components/landing/cta'
import { Hero } from '@/components/landing/hero'
import { LogoCloud } from '@/components/landing/logo-cloud'
import { Stats } from '@/components/landing/stats'
import { Feature1, Feature2 } from '@/components/landing/features'

export const metadata = {
  title: 'MaYA',
  description: 'This is the landing page of the MaYA project'
}

export default function page () {
  return (
    <main>
      <Hero />
      <LogoCloud />
      <Feature1/>
      <Feature2/>
      <Stats/>
      <CTA />
    </main>
  )
}
