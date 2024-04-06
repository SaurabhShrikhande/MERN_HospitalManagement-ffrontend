import React from 'react'
import { Hero } from '../component/Hero'
import { Biography } from '../component/Biography'

export const AboutUs = () => {
  return ( <>
    {/* <div>AboutUs</div> */}
    
    <Hero  title="Learn More About Us Heltcare institute" imageUrl="./about.png"/>
     
     <Biography imageUrl="whoweare.png"/>

    </>
  )
}
