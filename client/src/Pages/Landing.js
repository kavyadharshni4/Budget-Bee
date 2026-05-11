import React from 'react'
import Navbar from '../Components/Navbar'
import bg from '../assets/bg.jpg'

const Landing = () => {
  return (
    <div>
        <Navbar />
        <div>
          <img src={bg} alt="background image"/>
          <h1 class="landing-heading">Small steps, big savings — let’s begin!</h1>
        </div>
    </div>
  )
}

export default Landing