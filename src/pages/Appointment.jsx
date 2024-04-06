import React from 'react'
import { Hero } from '../component/Hero'
import { AppointmentForm } from '../component/AppointmentForm'

export const Appointment = () => {
  return (<>
    <div>Appointment</div>
    <Hero title="Shedule your meeting || HealtCare Institute" imageUrl= "dignin.png"/>
       
       <AppointmentForm/>

      
    </>
  )
}
