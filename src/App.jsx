import { useState } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Feature from './sections/Feature'
import Pricing from './sections/Pricing'
import Footer from './sections/Footer'
import About from './sections/About'
import Portfolio from './sections/Portfolio'
import WhatsappFloatingButton from './components/General/WhatsappFloatingButton'
import ScrollToSectionOnLoad from './hooks/ScrollOnLoad'

function App() {
  return (
    <>
      <Navbar/>
      <ScrollToSectionOnLoad/>
      <Hero/>
      <About/>
      <Feature/>
      <Portfolio/>
      <Pricing/>
      <Footer/>
      <WhatsappFloatingButton/>
    </>
  )
}

export default App
