import React from 'react'
import AboutHero from '../components/About/AboutHero'
import OurStory from '../components/About/OurStory'
import MissionVision from '../components/About/MissionVision'
import CoreValues from '../components/About/CoreValues'
import Team from '../components/About/Team'
import Timeline from '../components/About/Timeline'
import AboutCTA from '../components/About/AboutCTA'
const About = () => {
  return (
    <div>
      <AboutHero/>
      <OurStory/>
      <MissionVision/>
      <CoreValues/>
      <Team/>
      <Timeline/>
      <AboutCTA/>
    </div>
  )
}

export default About
