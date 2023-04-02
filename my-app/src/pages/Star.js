import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CardGauge2 } from '../components/Cards/CardScore2';

import BottomNavBar from '../components/BottomNavBar';
function Star() {
  const labels = ['Appearance', 'Personality', 'Interests', 'Occupation'];

  return (
    <div className="flex flex-col  h-screen bg-gray-100">
      <a href="/Feedback">
      <div className="w-full bg-white p-4 flex  justify-between border-b border-gray-200">

        <div className="flex items-center space-x-4">
          <img className="w-12 h-12 rounded-full" src='' alt="Profile" />
          <div>
            <div className="font-bold text-lg">Lucas Lee</div>
            <div className="text-sm text-gray-500">23 | New York</div>
          </div>
        </div>
        <button className="text-blue-500 font-semibold">Edit</button>
      </div>
      <div className="w-full bg-white p-4 flex flex-col  border-b border-gray-200">
       
      

        <div className="flex flex-col justify-center items-center mt-8 mb-10" >
                  {labels.map((text, labelIndex) => (
                    <div key={labelIndex} className="flex items-center mt-1">
                      <p className="text-purle font-semibold mr-2">{text}</p>
                      {[...Array(5)].map((_, starIndex) => (
                        <StarIcon
                          key={starIndex}
                          className={`h-5 w-5 ${
                            starIndex < 4 ? 'text-yellow-500' : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                < CardGauge2   />

              
      </div>
      <BottomNavBar/>
      </a>
    </div>
    
  );
};
    

export default Star;