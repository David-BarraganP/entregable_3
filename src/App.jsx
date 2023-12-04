import axios from "axios"
import { useEffect, useState } from "react"
import {getRandomNumber} from "./helpers/random"
import Location from "./components/Location"
import ResidenList from "./components/ResidenList"


function App() {
const [locationInfo, setLocationInfo] = useState(null)

  useEffect(() => {
    const randomDimention = getRandomNumber(126)
    axios
    .get(`https://rickandmortyapi.com/api/location/${randomDimention}`)
    .then(({data}) =>setLocationInfo(data))
    .catch((err) => console.log(err))
  },[])

  // const bgImages = {

  //   "01": "bg-[url(/images/Untitledimage.png)]",
  // }



 

  return (
    <main className={"  bg-center h-screen p-20 gap-10 bg-[url('/background1.svg')] bg-cover overflow-y-auto"}>   
      <div className="grid justify-center items-center">
        <img src="/rick.png"  width={400} alt="" />
      </div>
      <Location locationInfo={locationInfo} 
      setLocationInfo={setLocationInfo}/>
      <div className="grid justify-center items-center p-20 gap-10 ">
        <img className="h-full w-full object-cover " 
         src="/portal2.png" 
         width={1000}
         alt="" />
      </div>
      <ResidenList  residents={locationInfo?.residents ?? []}/>
      <div className="flex justify-center items-center p-20 gap-10 ">
        <img className="h-full w-full object-cover " 
         src="/portal.svg"
         width={1000}
          alt="" />
      </div>
    </main>
  )
}

export default App
