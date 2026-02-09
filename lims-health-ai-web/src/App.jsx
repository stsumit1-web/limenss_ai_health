import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import PlatformShowcase from './components/PlatformShowcase'
import FeaturesByUser from './components/FeaturesByUser'
import PandemicSection from './components/PandemicSection'
import Differentiators from './components/Differentiators'
import TrustSection from './components/TrustSection'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <section id="problem">
          <ProblemSection />
        </section>
        <section id="solution">
          <SolutionSection />
        </section>
        <section id="platform">
          <PlatformShowcase />
        </section>
        <section id="features">
          <FeaturesByUser />
        </section>
        <PandemicSection />
        <Differentiators />
        <TrustSection />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}

export default App
