import Hero from './sections/Hero'
import Header from './components/Header'
import Slots from './components/Slots'
import Strategy from './sections/Strategy'
import Solutions from './sections/Solutions'
import Testimonials from './sections/Testimonials'
import CaseStudies from './sections/CaseStudies'
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
    </main>
  )
}

export default App
