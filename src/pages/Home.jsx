import React from 'react'
import { Hero } from '../component/Hero'
import { Biography } from '../component/Biography'
import { Department } from '../component/Department'
import { MessageForm } from '../component/MessageForm'

export const Home = () => {
  return (<>
    {/* <div>Home</div> */}
    <Hero  title={"Welcome to Heltcare Institute"} imageUrl={ "/hero.png"} />
    <Biography  imageUrl = {"/about.png"}/>
    <Department/>
    <MessageForm/>
    </>
  )
}


