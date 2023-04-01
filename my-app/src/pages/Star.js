
import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import InfiniteScroll from 'react-infinite-scroll-component';

function Star() {
  const labels = ['Appearance', 'Personality', 'Interests', 'Occupation'];
  const initialImages = [
    "https://i.imgur.com/MWAcQRM.jpeg",
    "https://i.imgur.com/Lnt9K7l.jpeg",
    "https://i.imgur.com/Q9WPlWA.jpeg",
    "https://i.imgur.com/Gg6BpGn.jpeg",
    "https://i.imgur.com/clq9lGO.jpeg",
    "https://i.imgur.com/jJkz9VB_d.webp?maxwidth=760&fidelity=grand",
    "https://i.imgur.com/73QMhC2_d.webp?maxwidth=760&fidelity=grand",
    "	https://i.imgur.com/Dc7jM9T_d.webp?maxwidth=760&fidelity=grand",
  ];

  const [images, setImages] = useState(initialImages);

  const fetchMoreData = () => {
    // Add more images to the list after a short delay to simulate data fetching
    setTimeout(() => {
      setImages((prevImages) => [...prevImages, ...initialImages]);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <InfiniteScroll
        dataLength={images.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden">
              <img src={src} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 p-2">
                <div className="flex flex-col">
                  {labels.map((text, labelIndex) => (
                    <div key={labelIndex} className="flex items-center mt-1">
                      <p className="text-white font-semibold mr-2">{text}</p>
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
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Star;
