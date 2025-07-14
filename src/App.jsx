import { useState } from 'react'
import Hero from './sections/Hero'
import ShowCaseSection from './sections/ShowCaseSection'
import NavBar from './components/NavBar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards '
import Experience from './sections/Experience '
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import About from './sections/About'
import Services from './sections/Services'


function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <ShowCaseSection />
      {/* <LogoSection /> */}
      <FeatureCards />
      <Services />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
