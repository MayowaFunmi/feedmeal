import React from 'react'
import background from '../assets/slider-bg.webp'
import HeroNavbar from './HeroNavbar'
import HeroContent from './HeroContent'
import { useLocation } from 'react-router-dom'

const Hero: React.FC = () => {

  const location = useLocation()
  const isHome = location.pathname === '/';

  return (
    <section className={`py-6 flex flex-col ${isHome ? 'bg-cover bg-no-repeat lg:min-h-screen' : 'lg:h-1/4'}`} style={{ backgroundImage: `url(${background})` }}>
      <HeroNavbar />
      {isHome && <HeroContent />}
    </section>
  )
}

export default Hero