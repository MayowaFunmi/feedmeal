import React from 'react'
import biscuit_waist from '../assets/tanirex/biscuit-waste.webp'
import groundnutCake from '../assets/tanirex/groundnut-cake.webp'
import indomieWaste from '../assets/tanirex/indomie-waste-dogs.webp'
import palmKernelCake from '../assets/tanirex/palm-kernel-cake.webp'
import { Link } from 'react-router-dom'

const MainContent: React.FC = () => {
  return (
    <div className="mt-20 px-4 py-2 mb-15">
      <div className='text-center'>
        <h3 className='text-2xl lg:text-6xl font-semibold'>Ingredients For Feed Mill</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center bg-gray-100 mb-8 mt-6 h-96 space-x-2 space-y-2 rounded-md border-spacing-1 border-gray-200">
          <img src={biscuit_waist} alt="" className="w-2/3 h-3/4 object-cover rounded-lg px-2 py-4 hover:scale-110" loading='lazy' />
          <h3 className='bg-yellow-500 text-white text-3xl font-light px-4 py-4 rounded-full'>Biscuit Waste</h3>
        </div>
        <div className="flex flex-col items-center bg-gray-100 mb-8 mt-6 h-96 space-x-2 space-y-2 rounded-md border-spacing-1 border-gray-200">
          <img src={groundnutCake} alt="" className="w-2/3 h-3/4 object-cover rounded-lg px-2 py-4" loading='lazy' />
          <h3 className='bg-yellow-500 text-white text-3xl font-light px-4 py-4 rounded-full'>Groundnut Cake</h3>
        </div>
        <div className="flex flex-col items-center bg-gray-100 mb-8 mt-6 h-96 space-x-2 space-y-2 rounded-md border-spacing-1 border-gray-200">
          <img src={indomieWaste} alt="" className="w-2/3 h-3/4 object-cover rounded-lg px-2 py-4" loading='lazy' />
          <h3 className='bg-yellow-500 text-white text-3xl font-light px-4 py-4 rounded-full'>Indomie Waste</h3>
        </div>
        <div className="flex flex-col items-center bg-gray-100 mb-8 mt-6 h-96 space-x-2 space-y-2 rounded-md border-spacing-1 border-gray-200">
          <img src={palmKernelCake} alt="" className="w-2/3 h-3/4 object-cover rounded-lg px-2 py-4" loading='lazy' />
          <h3 className='bg-yellow-500 text-white text-3xl font-light px-4 py-4 rounded-full'>Palm Kernel</h3>
        </div>
      </div>
      <div className='text-center'>
        <Link to='/feed-meal-ingredients' className='bg-yellow-500 text-white text-2xl px-4 py-4 rounded-md'>Show More</Link>
      </div>
    </div>
  );
}

export default MainContent