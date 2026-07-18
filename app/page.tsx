import { SiteHeader } from '@/components/site-header'
import { DigitalConcierge, Dining, Families, FinalCta, Footer, Hero, Information, Medical, MobileFixedCta, Philosophy, Residence } from '@/components/home-sections'

export default function Page() {
  return <>
    <SiteHeader />
    <main>
      <Hero />
      <Philosophy />
      <Residence />
      <Dining />
      <Medical />
      <DigitalConcierge />
      <Families />
      <Information />
      <FinalCta />
    </main>
    <Footer />
    <MobileFixedCta />
  </>
}
