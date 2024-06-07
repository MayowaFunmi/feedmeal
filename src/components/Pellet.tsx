import React from 'react'
import pellet from '../assets/pelletized-food.webp'

const Pellet: React.FC = () => {
  return (
    <div id='#pellets' className='mt-10 bg-cover px-4 py-6 mb-15'>
      <div className='text-center'>
        <h3 className='text-2xl lg:text-6xl font-semibold'>Pelletized Feed</h3>
      </div>
      <div className='my-6 flex justify-center'>
        <img className='lg:w-1/5 w-3/5 h-1/2 rounded-md' src={pellet} alt="pelletized food" loading='lazy' />
      </div>
    </div>
  )
}

export default Pellet