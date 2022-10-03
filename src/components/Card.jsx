import React from 'react'
import shoesMan1 from '../assets/shoes-man-1.jpg'
import shoesMan2 from '../assets/shoes-man-2.jpg'
import shoesMan3 from '../assets/shoes-man-3.jpg'
import shoesMan4 from '../assets/shoes-man-4.jpg'
import shoesMan5 from '../assets/shoes-man-5.jpg'
import shoesWoman from '../assets/shoes-woman.jpg'
import shoesWoman1 from '../assets/shoes-woman-3.jpg'

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

const Card = () => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-2 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          {productItems?.map((items, index) => {
            return (
              <div className='lg:w-1/4 md:w-1/2 p-4 w-full' key={index}>
                <div className='bg-secondary rounded-md'>
                  <a className='block relative h-48 rounded overflow-hidden'>
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
                  <h2 className='text-gray-900 title-font text-lg font-medium'>
                    {items.productName}
                  </h2>
                  <p className='mt-1'>{items.price}</p>
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
