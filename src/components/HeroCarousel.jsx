import React, { useState, useEffect, useRef } from 'react'
import './animation.css'

const listItems = [
  'images/shoes-man-1.jpg',
  'images/shoes-man-2.jpg',
  'images/shoes-man-3.jpg',
  'images/shoes-man-4.jpg',
  'images/shoes-man-5.jpg',
]

const dummyListItems = [
  {
    title: 'Red Shoes',
    description: 'Incredeble shoes to workout',
    price: '15.000.000,00',
    promo: true,
    discount: 11,
    image: 'images/shoes-man-1.jpg',
  },
  {
    title: 'Blue Shoes',
    description: 'Awesome shoes to Jogging',
    price: '100.000,00',
    promo: true,
    discount: 30,
    image: 'images/shoes-man-2.jpg',
  },
  {
    title: 'Full Color Shoes',
    description: 'Great shoes to office work',
    price: '25.000.000,00',
    promo: false,
    discount: '',
    image: 'images/shoes-man-3.jpg',
  },
  {
    title: 'Orange Shoes',
    description: 'New shoes to goes',
    price: '5.000.000,00',
    promo: true,
    discount: 10,
    image: 'images/shoes-man-4.jpg',
  },
  {
    title: 'Red Shoes',
    description: 'Incredeble shoes to workout',
    price: '7.000.000,00',
    promo: true,
    discount: 60,
    image: 'images/shoes-man-5.jpg',
  },
]

console.log('dummyListItems', dummyListItems[0].image)

let count = 0
let slideInterval
const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showArrow, setShowArrow] = useState(false)

  const slideRef = useRef()

  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim')
  }

  useEffect(() => {
    slideRef.current.addEventListener('animationend', removeAnimation)
    slideRef.current.addEventListener('mouseenter', pauseSlider)
    slideRef.current.addEventListener('mouseleave', startSlider)

    startSlider()
    return () => {
      pauseSlider()
    }
    // eslint-disable-next-line
  }, [])

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick()
    }, 3000)
    setShowArrow(false)
  }

  const pauseSlider = () => {
    clearInterval(slideInterval)
    setShowArrow(true)
  }

  const handleOnNextClick = () => {
    count = (count + 1) % dummyListItems.length
    setCurrentIndex(count)
    slideRef.current.classList.add('fade-anim')
  }
  const handleOnPrevClick = () => {
    const productsLength = dummyListItems.length
    count = (currentIndex + productsLength - 1) % productsLength
    setCurrentIndex(count)
    slideRef.current.classList.add('fade-anim')
  }

  return (
    <>
      <div
        className='hidden md:block mx-auto max-w-7xl rounded-lg select-one relative bg-gray-100 mt-2'
        ref={slideRef}
      >
        <div className='flex'>
          <div className='flex justify-center w-1/3 top-1/2 items-center'>
            <div>
              <p className='text-3xl text-secondary font-bold'>
                {dummyListItems[currentIndex].title}{' '}
              </p>
              <p className='text-xl text-secondary'>
                {dummyListItems[currentIndex].description}{' '}
              </p>
              <button className='bg-primary py-3 px-5 rounded-lg text-white mt-5'>
                Shop Now
              </button>
            </div>
          </div>
          <img
            src={dummyListItems[currentIndex].image}
            alt='img'
            className='h-72 w-2/3 object-cover rounded-r-lg'
          />
        </div>
        {showArrow ? (
          <div className='absolute w-full top-1/2 flex items-center transform -translate-y-1/2 justify-between'>
            <button onClick={handleOnNextClick}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='#FFFFFF'
                viewBox='0 0 24 24'
                strokeWidth={1}
                stroke='currentColor'
                className='w-8 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
            <button onClick={handleOnPrevClick}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='#FFFFFF'
                viewBox='0 0 24 24'
                strokeWidth={1}
                stroke='currentColor'
                className='w-8 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
          </div>
        ) : (
          ''
        )}
      </div>

      {/* MOBILE */}
      <div
        className='block md:hidden mx-auto max-w-7xl rounded-lg select-one relative bg-gray-100 mt-2'
        ref={slideRef}
      >
        {/* <div className='flex'>
          <div className='flex justify-center w-1/3 top-1/2 items-center'>
            <div>
              <p className='text-3xl text-secondary font-bold'>
                {dummyListItems[currentIndex].title}{' '}
              </p>
              <p className='text-xl text-secondary'>
                {dummyListItems[currentIndex].description}{' '}
              </p>
              <button className='bg-primary py-3 px-5 rounded-lg text-white mt-5'>
                Shop Now
              </button>
            </div>
          </div>
          <img
            src={dummyListItems[currentIndex].image}
            alt='img'
            className='h-72 w-2/3 object-cover rounded-r-lg'
          />
        </div>
        {showArrow ? (
          <div className='absolute w-full top-1/2 flex items-center transform -translate-y-1/2 justify-between'>
            <button onClick={handleOnNextClick}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='#FFFFFF'
                viewBox='0 0 24 24'
                strokeWidth={1}
                stroke='currentColor'
                className='w-8 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
            <button onClick={handleOnPrevClick}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='#FFFFFF'
                viewBox='0 0 24 24'
                strokeWidth={1}
                stroke='currentColor'
                className='w-8 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
          </div>
        ) : (
          ''
        )} */}
        <div className='grid grid-cols-1 gap-6 w-full mt-2'>
          <div className='relative overflow-hidden rounded-b-3xl cursor-pointer'>
            <img
              className='object-cover w-full h-96'
              src={dummyListItems[currentIndex].image}
              alt='Flower and sky'
            />

            <div className='absolute -bottom-2 left-0 right-0 px-6 py-4 bg-secondary flex justify-between bg-opacity-30'>
              <div>
                <h4 className='mb-3 text-xl font-semibold tracking-tight text-white opacity-100'>
                  {dummyListItems[currentIndex].title}
                </h4>
                <p className='leading-normal text-gray-100 opacity-100'>
                  {dummyListItems[currentIndex].description}
                </p>
              </div>
              <button className='bg-primary py-3 px-5 rounded-lg text-white mt-5 '>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroCarousel
