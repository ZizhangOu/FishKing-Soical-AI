import { StarIcon } from '@heroicons/react/20/solid';


function Star() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 gap-4">
        <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" />
        <img src="image4.jpg" alt="Image 4" />
      </div>
      <div className="grid grid-cols-5 gap-4 mt-4">
        <div className="flex flex-col items-center">
          <p>Appearance</p>
          <p>Personality</p>
          <p>Interests</p>
          <p>Occupation</p>
          <p>Occupation</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex">
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-yellow-500" />
          </div>
          <div className="flex">
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="flex">
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-gray-400" />
            <StarIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="flex">
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-gray-400" />
            <StarIcon className="h-5 w-5 text-gray-400" />
            <StarIcon className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}