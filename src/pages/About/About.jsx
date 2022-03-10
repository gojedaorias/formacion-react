import React from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Navbar from '../../components/Navbar/Navbar'

const About = () => {
  return (
    <div>
        <Header title="About" color="red" />
        <Navbar/>
        <Main text='Pagina about'/>
    </div>
  )
}

export default About