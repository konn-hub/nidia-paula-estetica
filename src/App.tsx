import './App.css'
import { Header } from '@/components/Header'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Hero } from '@/components/sections/Hero'
import { TopProcedures } from '@/components/sections/TopProcedures'
import { PromoBanner } from '@/components/sections/PromoBanner'
import { AllServices } from '@/components/sections/AllServices'
import { DidYouKnow } from '@/components/sections/DidYouKnow'
import { WhoAttends } from '@/components/sections/WhoAttends'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { Feedbacks } from '@/components/sections/Feedbacks'
import { FAQ } from '@/components/sections/FAQ'
import { HowToSchedule } from '@/components/sections/HowToSchedule'
import { OurSpace } from '@/components/sections/OurSpace'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <TopProcedures />
      </AnimatedSection>
      <AnimatedSection>
        <PromoBanner />
      </AnimatedSection>
      <AnimatedSection>
        <AllServices />
      </AnimatedSection>
      <AnimatedSection>
        <DidYouKnow />
      </AnimatedSection>
      <AnimatedSection>
        <WhoAttends />
      </AnimatedSection>
      <AnimatedSection>
        <BeforeAfter />
      </AnimatedSection>
      <AnimatedSection>
        <HowToSchedule />
      </AnimatedSection>
      <AnimatedSection>
        <Feedbacks />
      </AnimatedSection>
      <AnimatedSection>
        <OurSpace />
      </AnimatedSection>
      <AnimatedSection>
        <FAQ />
      </AnimatedSection>
      <Footer />
    </div>
  )
}

export default App

