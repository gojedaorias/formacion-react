import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Main from '../../components/Main/Main'
import Aside from '../../components/Aside/Aside'
import Footer from '../../components/Footer/Footer'

import './Home.css'

const Home = () => {
  return (
    <div className='home'>
    <Header/>
    <Navbar/>
    <Main/>
    <Aside />
    <Footer />
    </div>
  )
}

export default Home


