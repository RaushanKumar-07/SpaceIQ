import React from 'react'
import HomeHero from '../components/home/HomeHero'
import Statistics from '../components/home/Statistics'
import Problem from '../components/home/Problem'
import Solution from '../components/home/Solution'
import Features from '../components/home/Features'
import HowItWorks from '../components/home/HowItWorks'
import Testimonial from '../components/home/Testimonial'
import Action from '../components/home/Action'

const home = () => {
  return (
    <div>
      <HomeHero/>
      <Statistics/>
      <Problem/>
      <Solution/>
      <Features/>
      <HowItWorks/>
      <Testimonial/>
      <Action/>
    </div>
  )
}

export default home
