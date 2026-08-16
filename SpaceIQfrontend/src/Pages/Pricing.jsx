import React from 'react'
import PricingHero from '../components/Pricing/PricingHero'
import PricingCards from '../components/Pricing/PricingCards'
import Comparison from '../components/Pricing/Comparison'
import FAQ from '../components/Pricing/FAQ'
import PricingCTA from '../components/Pricing/PricingCTA'

const Pricing = () => {
  return (
    <div>
      <PricingHero/>
      <PricingCards/>
      <Comparison/>
      <FAQ/>
      <PricingCTA/>
    </div>
  )
}

export default Pricing
