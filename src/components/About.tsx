import React from 'react';
import catfish from '../assets/catfish.webp'

const About: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-16">
        <div className="prose">
          <p className='font-bold text-2xl'>
            Welcome to Tanirex Agro!!!
          </p>
          <p>
            We specialize in the production and sales of animal feed ingredients, feed meal, pelletization, feed additives.
          </p>
          <p>We also sell catfish. Contact us for the construction of fish ponds and all other farm consulting services.</p>
          <div className='my-6 flex justify-center'>
            <img className='lg:w-2/5 w-3/5 h-1/2 rounded-md' src={catfish} alt="catfish" loading='lazy' />
          </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Contact Information</h2>
            <ul className="list-disc space-y-2">
              <li>
                <span className="inline-block mr-2 font-bold">Address:</span> 11, Ganiyu Bello bus stop, felele Ibadan
              </li>
              <li>
                <span className="inline-block mr-2 font-bold">Phone Numbers:</span> 07067591282
              </li>
              <li>
                <span className="inline-block mr-2 font-bold">WhatsApp:</span> +2348077985927
              </li>
              <li>
                <span className="inline-block mr-2 font-bold">Email:</span> tanirexagro@gmail.com
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
