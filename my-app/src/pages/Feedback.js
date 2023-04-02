

import {DateRatingRadarChart} from "../components/Cards/DateRatingRadarChart";
import { StarIcon } from "@heroicons/react/20/solid";
import { RatingTable } from "../components/Cards/RatingTable";
import BottomNavBar from "../components/BottomNavBar";
function Facebook() {

  return (
    <div className="flex flex-col mt-10 items-center h-screen bg-gray-100">
      <h1>Feedback</h1>
      <div className="w-full bg-white p-4 flex  justify-between border-b border-gray-200">
        <div className="flex items-center space-x-4">

<DateRatingRadarChart/>
<RatingTable/>
<BottomNavBar/>
        </div>
        </div>
        </div>
            

  )
}

export default Facebook;