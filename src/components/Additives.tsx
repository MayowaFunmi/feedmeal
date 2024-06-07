import React from 'react'
import di_methionine from '../assets/additives/di_methioine.webp'
import l_lysine from '../assets/additives/l_lysine.webp'
import premix from '../assets/additives/premix.webp'
import binder from '../assets/additives/toxin_binder.webp'

const Additives: React.FC = () => {
  return (
    <div className="mt-20 bg-cover px-4 py-6 mb-10">
      <div className='text-center'>
        <h3 className='text-2xl lg:text-6xl font-semibold'>Feed Additives</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center bg-gray-100 mb-8 mt-6 h-96 space-x-2 space-y-2 rounded-md border-spacing-1 border-gray-200">
          <img src={di_methionine} alt="" className="w-2/3 h-3/4 object-cover rounded-lg px-2 py-4 hover:scale-110" loading='lazy' />
          <h3 className='bg-yellow-500 text-white text-3xl font-light px-4 py-4 rounded-full'>Di Methioine</h3>
        </div>
        <div className="flex flex-col items-center bg-gray-100 mb-8 mt-6 h-96 space-x-2 space-y-2 rounded-md border-spacing-1 border-gray-200">
          <img src={l_lysine} alt="" className="w-2/3 h-3/4 object-cover rounded-lg px-2 py-4" loading='lazy' />
          <h3 className='bg-yellow-500 text-white text-3xl font-light px-4 py-4 rounded-full'>L-Lysine</h3>
        </div>
        <div className="flex flex-col items-center bg-gray-100 mb-8 mt-6 h-96 space-x-2 space-y-2 rounded-md border-spacing-1 border-gray-200">
          <img src={premix} alt="" className="w-2/3 h-3/4 object-cover rounded-lg px-2 py-4" loading='lazy' />
          <h3 className='bg-yellow-500 text-white text-3xl font-light px-4 py-4 rounded-full'>Layer Premix</h3>
        </div>
        <div className="flex flex-col items-center bg-gray-100 mb-8 mt-6 h-96 space-x-2 space-y-2 rounded-md border-spacing-1 border-gray-200">
          <img src={binder} alt="" className="w-2/3 h-3/4 object-cover rounded-lg px-2 py-4" loading='lazy' />
          <h3 className='bg-yellow-500 text-white text-3xl font-light px-4 py-4 rounded-full'>Toxin Binder</h3>
        </div>
      </div>
    </div>
  );
}

export default Additives