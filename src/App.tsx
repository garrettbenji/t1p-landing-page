import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { SocialProof } from './components/sections/SocialProof'
import { Services } from './components/sections/Services'
import { WhyChooseUs } from './components/sections/WhyChooseUs'
import { BeforeAfter } from './components/sections/BeforeAfter'
import { Testimonials } from './components/sections/Testimonials'
import { Process } from './components/sections/Process'
import { FAQ } from './components/sections/FAQ'
import { FinalCTA } from './components/sections/FinalCTA'
import { Footer } from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <WhyChooseUs />
      <BeforeAfter />
      <Testimonials />
      <Process />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
