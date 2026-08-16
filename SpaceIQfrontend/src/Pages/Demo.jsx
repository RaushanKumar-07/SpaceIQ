import React from 'react'
import DemoHero from '../components/BookDemo/DemoHero'
import DemoBenefits from '../components/BookDemo/DemoBenefits'
import DemoForm from '../components/BookDemo/DemoForm'
import DemoProcess from '../components/BookDemo/DemoProcess'
import DemoFAQ from '../components/BookDemo/DemoFAQ'

const Demo = () => {
  return (
    <div>
      <DemoHero/>
      <DemoBenefits/>
      <DemoForm/>
      <DemoProcess/>
      <DemoFAQ/>
    </div>
  )
}

export default Demo
