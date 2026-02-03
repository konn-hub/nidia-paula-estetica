import './App.css'
import { Header } from '@/components/Header'
import { ScrollSection } from '@/components/ScrollSection'
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
      <ScrollSection>
        <Hero />
      </ScrollSection>
      <ScrollSection>
        <TopProcedures />
      </ScrollSection>
      <ScrollSection>
        <PromoBanner />
      </ScrollSection>
      <ScrollSection>
        <AllServices />
      </ScrollSection>
      <ScrollSection>
        <DidYouKnow />
      </ScrollSection>
      <ScrollSection>
        <WhoAttends />
      </ScrollSection>
      <ScrollSection>
        <BeforeAfter />
      </ScrollSection>
      <ScrollSection>
        <HowToSchedule />
      </ScrollSection>
      <ScrollSection>
        <Feedbacks />
      </ScrollSection>
      <ScrollSection>
        <OurSpace />
      </ScrollSection>
      <ScrollSection>
        <FAQ />
      </ScrollSection>
      <Footer />
    </div>
  )
}

export default App

