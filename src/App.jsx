import Hero from './sections/Hero'
import Header from './components/Header'
import Slots from './components/Slots'
import Strategy from './sections/Strategy'
import Solutions from './sections/Solutions'
import Testimonials from './sections/Testimonials'
import CaseStudies from './sections/CaseStudies'
import FAQ from './sections/FAQ'
import BookCall from './sections/BookCall'
function App() {

  return (
    <main>
       <Slots/>
       <Header/>
       <Hero/>
       <Strategy/>
       <Solutions/>
       <Testimonials/>
       <CaseStudies/>
       <FAQ/>
       <BookCall/>
    </main>
  )
}

export default App
