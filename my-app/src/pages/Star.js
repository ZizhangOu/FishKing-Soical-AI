import { StarIcon } from '@heroicons/react/20/solid';
import BottomNavBar from '../components/BottomNavBar';


function Star() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 gap-4">
        {["Appearance", "Personality", "Interests", "Occupation", ].map((text, index) => (
          <div key={index} className="relative">
            <img
              src={`https://i.imgur.com/${["MWAcQRM", "Lnt9K7l", "Q9WPlWA", "Gg6BpGn"][index]}.jpeg`}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
              <p className="text-white font-semibold">{text}</p>
              <div className="flex mt-1">
                {[...Array(5)].map((_, starIndex) => (
                  <StarIcon
                    key={starIndex}
                    className={`h-5 w-5 ${starIndex < 4 ? "text-yellow-500" : "text-gray-400"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <BottomNavBar/>
    </div>
  );
}
export default Star;