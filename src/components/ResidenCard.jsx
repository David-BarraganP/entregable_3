import axios from "axios"
import { useEffect, useState } from "react"


const ResidenCard = ({residentURL}) => {
   
    const [residenInfo,setResidenInfo] = useState (null)

    const bgByStatus = {
        Alive: "bg-green-500",
        Dead: "bg-red-500",
        unknown: "bg-slate-500",
    }

    useEffect(() => {
        axios
        .get(residentURL)
        .then(({data}) => setResidenInfo(data))
        .catch((err) => console.log(err))

    },[])
    
  return (
    <article className=" border-4  border-lime-900 rounded-md ">
        <header className="relative ">
            <img className="rounded-md" 
            src={residenInfo?.image} alt="" />
            {/* {status} */}
            <div className="flex items-center gap-2 absolute bottom-8 left-1/2
            -translate-x-1/2 bg-black/60 rounded-md text-white p-1 px-2 ">
                <div className={`h-3 aspect-square  rounded-full ${bgByStatus[residenInfo?.status]}`}></div>
                <span>{residenInfo?.status}</span>
            </div>
        </header>
            <section className=" bg-black/5  text-white rounded-lg overflow-hidden shadow-lg shadow-black/10">
                <h5 className=" line-clamp-1 grid justify-center items-center font-bold text-xl mb-4  "
                >{residenInfo?.name}</h5>
                <ul>
                    <li className="line-clamp-1"> <span>Especie :</span> {residenInfo?.species} </li>
                    <li className="line-clamp-1"> <span>Origen :</span> {residenInfo?.origin.name}</li>
                    <li className="line-clamp-1"> <span>Episodios :</span> {residenInfo?.episode.length} </li>
                </ul>
            </section>

    </article>
  )
}

export default ResidenCard