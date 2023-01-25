import React from 'react'
import AboutUs from '../../components/AboutUs/AboutUs'
import BestSeller from '../../components/BestSellers/BestSeller'
import Header from '../../components/Header/Header'

function Home() {
  return (
    <div className='home'>
        <Header />
        <AboutUs />
        <BestSeller />
    </div>
  )
}

export default Home
