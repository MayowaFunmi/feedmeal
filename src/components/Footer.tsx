import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-500 py-4 px-4 mt-auto">
      <div className="flex flex-col items-center justify-center">
        <h2 className='text-white font-bold py-2'>Contact Tanirex Agro:</h2>
        <div className="flex justify-center">
          {/* Add social media icons here */}
          <Link to={`https://wa.me/+2348077985927`} target="_blank" className="mr-4 text-3xl text-green-700 hover:text-green-800">
            <FaWhatsapp />
          </Link>
          <Link to={''} target="_blank" className="mr-4 text-3xl text-blue-700 hover:text-blue-800">
            <FaFacebook />
          </Link>
          <Link to={''} target="_blank" className="mr-4 text-3xl text-blue-500 hover:text-blue-600">
            <FaTwitter />
          </Link>
          <Link to={''} target="_blank" className="text-3xl text-pink-700 hover:text-pink-800">
            <FaInstagram />
          </Link>
        </div>
        <div className='flex flex-col justify-center'>
          <span>© 2024 All Rights Reserved </span>
          <Link className='hover:font-bold' to={`https://wa.me/+2349032055129`} target='_blank'> Affable Software / Web Developer</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer