import React from 'react'
import MainContent from './MainContent'
import Additives from './Additives'
import Pellet from './Pellet'

const Products: React.FC = () => {
  return (
    <div className='bg-gray-300 bg-cover'>
      <MainContent />
      <Additives />
      <Pellet />
    </div>
  )
}

export default Products