import Header from './components/Header'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Stats from './components/Stats'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Security from './components/Security'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-wire-bg text-wire-text-primary">
      <Header />
      <Hero />
      <SocialProof />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Security />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App