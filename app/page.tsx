import { SiteHeader } from '@/components/site-header'
import { DigitalConcierge, Dining, Families, FinalCta, Footer, Hero, Information, Medical, MobileFixedCta, Philosophy, Residence } from '@/components/home-sections'

export default function Page() {
  return <>
    <a className="skip-link" href="#main-content">本文へ移動</a>
    <SiteHeader />
    <main id="main-content">
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
