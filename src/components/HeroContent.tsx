import React from 'react'
import animals from '../assets/animals.webp';


const HeroContent: React.FC = () => {
  return (
    <div className='w-full flex lg:flex-row flex-col items-center lg:items-start lg:justify-between space-y-3'>
      <div className='lg:ml-36 lg:mt-20 w-full lg:w-1/2 px-4'>
        <h2 className='text-white font-bold text-2xl lg:text-7xl'>Feed Ingredients To Produce Great Feed For Your Livestocks</h2>
      </div>

      <div className='w-full lg:w-1/2 flex justify-center px-4'>
        <img src={animals} alt="animal-groups" loading='lazy' className='lg:max-h-fit h-2/3 object-center rounded-3xl border-yellow-400 border-4 bottom-3 lg:top-6' />
      </div>
    </div>
  )
}

export default HeroContent