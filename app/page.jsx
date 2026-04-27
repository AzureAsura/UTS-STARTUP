import Download from '@/sections/Download'
import Faq from '@/sections/Faq'
import Features from '@/sections/Features'
import Footer from '@/sections/Footer'
import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import HowItWorks from '@/sections/HowItWorks'
import Partners from '@/sections/Partners'
import Pricing from '@/sections/Pricing'
import Product from '@/sections/Product'
import Testimonials from '@/sections/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Features />
      <Product/>
      <Pricing />
      <HowItWorks/>
      <Faq />
      <Testimonials />
<Partners/>
    </div>
  )
}

export default page