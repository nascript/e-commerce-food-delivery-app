import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import HeroCarousel from '../components/HeroCarousel'
import Footer from '../components/Footer'
// import Cart from '../components/Cart'
const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setData(json))
  }, [])
  return (
    <div>
      <Header />
      <HeroCarousel data={data} />
      {/* <Cart /> */}
      <Content data={data} />
      <Footer />
    </div>
  )
}

export default Home
