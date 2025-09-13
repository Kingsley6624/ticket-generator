import React from 'react'
import Form from './Form'
import bgMobile from '../assets/images/background-mobile.png'
import bgTablet from '../assets/images/background-tablet.png'
import bgdesktop from '../assets/images/background-desktop.png'



const Home = () => {
  return (
  <section>
    <div className='bg-[url(${bgMobile})]'>
      <Form/>
    </div>
  </section>
  )
}

export default Home