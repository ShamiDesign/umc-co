import React from 'react'
import Landing from "../Component/Home/Landing"

import About from '../Component/Home/About'
import AboutHero from '../Component/Home/AboutHero'
import AirportS from "../Component/Home/AirportS"
import Operations from '../Component/Home/Operations'
import WhyUs from '../Component/Home/WhyUs'
import Quality from '../Component/Home/Quality'

const Home = () => {
  return (
   <>
   <section>
   <Landing />
   <About />
   <AboutHero />
   <AirportS />
   <Operations />
   <WhyUs />
   <Quality />
   
   </section>
   </>
  )
}

export default Home