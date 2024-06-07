import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/tanirex-logo.webp'

const HeroNavbar:React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className='w-full'>
      <nav className='w-full lg:ml-10 ml-3'>
        <div className='container px-4 flex flex-wrap items-center justify-between py-2 mx-auto lg:space-x-4'>
          <img src={logo} alt="tanirex-logo" className='object-fill rounded-full w-auto h-3/4' loading='lazy' />
          <div className='flex flex-col'>
            <Link
              to="/"
              className='inline-flex text-white p-2 text-4xl font-bold tracking-wider'
            >
              Tanirex Agro
            </Link>
            <small className='text-white italic'>... the name you can trust</small>
          </div>

          <button
            className='inline-flex items-center ml-auto mr-9 justify-center text-white border h-10 w-10 rounded-md outline-none lg:hidden'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <div className={`lg:inline-flex lg:flex-grow lg:items-center ${!navbarOpen ? 'hidden' : 'block'}`}>
            <ul className='flex flex-col lg:flex-row lg:space-x-3 space-y-2 lg:space-y-0'>
              <li>
                <Link 
                  to="/" 
                  className={`flex px-4 py-2 rounded-md font-medium text-white text-lg hover:text-yellow-600 ${pathname === '/' ? 'text-yellow-600' : ''}`}>HOME</Link>
              </li>
              <li>
                <Link 
                  to="/about-us" 
                  className={`flex px-4 py-2 rounded-md font-medium text-white hover:text-yellow-600 ${pathname === '/about-us' ? 'text-yellow-600' : ''}`}>ABOUT US</Link>
              </li>
              <li>
                <Link 
                  to="/feed-meal-ingredients" 
                  className={`flex px-4 py-2 rounded-md font-medium text-white hover:text-yellow-600 ${pathname === '/feed-meal-ingredients' ? 'text-yellow-600' : ''}`}>INGREDIENTS</Link>
              </li>
              <li>
                <Link 
                  to="/our-services" 
                  className={`flex px-4 py-2 rounded-md font-medium text-white hover:text-yellow-600 ${pathname === '/our-services' ? 'text-yellow-600' : ''}`}>SERVICES</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeroNavbar;
