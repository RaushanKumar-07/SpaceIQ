import React from 'react'
import ContactHero from '../components/Contact/ContactHero'
import ContactInfo from '../components/Contact/ContactInfo'
import ContactForm from '../components/Contact/ContactForm'
import FAQPreview from '../components/Contact/FAQPreview'
import ContactCTA from '../components/Contact/ContactCTA'

const Contact = () => {
  return (
    <div>
        <ContactHero/>
         <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <FAQPreview/>
      <ContactCTA/>
    </div>
  )
}

export default Contact
