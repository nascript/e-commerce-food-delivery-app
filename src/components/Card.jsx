import React, { useEffect, useState } from 'react'

const productItems = [
  {
    productName: 'Shoes Red',
    category: 'shoes',
    price: 'Rp. 100.000,00',
    image: 'images/shoes-man-1.jpg',
  },
  {
    productName: 'Shoes Blue',
    category: 'shoes',
    price: 'Rp. 20.000,00',
    image: 'images/shoes-man-2.jpg',
  },
  {
    productName: 'Shoes Brown',
    category: 'shoes',
    price: 'Rp. 290.000,00',
    image: 'images/shoes-man-3.jpg',
  },
  {
    productName: 'Shoes Yellow',
    category: 'shoes',
    price: 'Rp. 990.000,00',
    image: 'images/shoes-man-4.jpg',
  },
  {
    productName: 'Shoes Green',
    category: 'shoes',
    price: 'Rp. 2.300.000,00',
    image: 'images/shoes-man-5.jpg',
  },
  {
    productName: 'Shoes Purple',
    category: 'shoes',
    price: 'Rp. 550.000,00',
    image: 'images/shoes-woman.jpg',
  },
  {
    productName: 'Shoes Purple',
    category: 'shoes',
    price: 'Rp. 550.000,00',
    image: 'images/shoes-woman-2.jpg',
  },
  {
    productName: 'Shoes Full Color',
    category: 'shoes',
    price: 'Rp. 550.000,00',
    image: 'images/shoes-woman-3.jpg',
  },
]

const Card = ({ openWebFiltersOpen, data }) => {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then((res) => res.json())
  //     .then((json) => setData(json))
  // }, [])

  console.log('data', data)
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-2 md:px-5 md:py-2 mx-auto'>
        <div className='flex flex-wrap'>
          {data?.map((items, index) => {
            return (
              <div
                className={`${
                  openWebFiltersOpen ? 'lg:w-1/4' : 'lg:w-1/6'
                } w-1/2 xs:w-1/2 p-4 border-2 border-gray-100 my-1 shadow-sm`}
                key={index}
              >
                <div className='bg-white rounded-md'>
                  <a className='block relative h-52 lg:h-48 rounded overflow-hidden'>
                    <img
                      alt='ecommerce'
                      className='object-cover object-center w-full h-full block'
                      src={items.image}
                    />
                  </a>
                </div>
                <div className='mt-4'>
                  <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                    {items.category}
                  </h3>
                  <h2 className='text-gray-900 title-font text-md font-medium'>
                    {items.title}
                  </h2>
                  <p className='mt-1'>Rp. {items.price} K</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Card
