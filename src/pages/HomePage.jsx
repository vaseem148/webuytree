import React from 'react'
import Home from "../components/Home"
import WhyTreesMatter from '../components/Whytreesmatter'
import WhyTreeRemoval from '../components/WhyTreeRemoval'
import OurServices from '../components/Services'
import Documents from '../components/Documents'
import Request from '../components/Request';
import Contact from '../components/Contact';
import LegalDisclaimer from '../components/LegalDisclaimer';
import PrivacyPolicy from "../pages/PrivacyPolicy"



function HomePage() {
  return (
    <>
      <>
        <Home />
        <WhyTreesMatter/>
        <WhyTreeRemoval />
        <OurServices/>
        <Documents />
        <Request />
        <Contact />
        <LegalDisclaimer />
        
        </> 
    </>
  )
}

export default HomePage