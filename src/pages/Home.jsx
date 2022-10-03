import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import HeroCarousel from '../components/HeroCarousel'
// import Cart from '../components/Cart'
const Home = () => {
  return (
    <div>
      <Header />
      <HeroCarousel />
      {/* <Cart /> */}
      <Content />
    </div>
  )
}

export default Home
