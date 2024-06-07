import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  "Feed Ingredients",
  "Feed Additives",
  "Pelletized Feeds",
];

const others = [
  "Selling of catfish",
  "Construction of fish ponds",
];

const Services: React.FC = () => {
  return (
    <div className="mt-5 flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md lg:w-1/2">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          At Tanirex Agro, We offer the following services
        </h2>
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          Production and sales of
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {services.map((service, index) => (
            <li key={index} className="text-lg">
              {service}
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          Other services include
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {others.map((item, index) => (
            <li key={index} className="text-lg">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className='mx-5 py-4'>
        <Link to={'/about-us'} className='underline text-blue-500'>Contact us</Link> today and you will be glad you did.
      </div>
    </div>
  );
};

export default Services;
