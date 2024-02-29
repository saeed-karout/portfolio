import { useEffect } from 'react'
import Headers from './components/1-header/header'
import Hero from './components/2-hero/hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/contact'
import Footer from './components/5-footer/footer'
import { useState } from 'react'



function App() {


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 300)
        setShowScrollButton(true)
      else { setShowScrollButton(false) }
      ;
    })
  })


  const [showScrollButton, setShowScrollButton] = useState(false)

  return (
    <div id='up' className='container' >
      <Headers />


      <Hero />

      <div className='divider' />


      <Main />
      <div className='divider' />

      <Contact />
      <div className='divider' />

      <Footer />


      <a href="#up" style={{ opacity: showScrollButton ? 1 : 0, transition: "1s" }}>

        <button className=' icon-keyboard_arrow_up scrollToTop'></button>
      </a>



    </div>
  )
}


  
export default App
