import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'

import Product from './components/Products/Product'
import Banner from './components/Banner/Banner'
import Blogs from './components/Blogs/Blogs'

import { UpdateFollower } from 'react-mouse-follower'
import BannerText from './components/Banner/BannerText'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <UpdateFollower 
        mouseOptions={
          {
            backgroundColor: "white",
            zIndex: 10,
            followSpeed: 1.5,
            
            
          }
        }>
        <Hero/>
        <Product/> 
        <Banner/>
        <BannerText/>
        <Blogs/>
        <FAQ/>
        <Footer/>
      </UpdateFollower>
    </main> 
  )
}

export default App