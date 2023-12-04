import axios from "axios"
import { IconSearch } from "@tabler/icons-react";



const Location = ({locationInfo, setLocationInfo}) => {

  

    const handleSubmit = (e) => {
        e.preventDefault()
        const newLocationId = (e.target.newLocation.value)

        axios
        .get(`https://rickandmortyapi.com/api/location/${newLocationId}`)
        .then(({data}) => setLocationInfo(data))
        .catch((err) => console.log(err))

    }
  
  
  return (
   <section className=" bg-black/5 grid justify-center items-center p-4 ">
        <form 
        className="grid  gap-8 md:flex justify-center items-center p-4"
        onSubmit={handleSubmit }>
         <div className="bg-black/5 text-white flex gap-2 p-3 rounded-md shadow-md shadow-black/50  border-4 border-lime-900">
        <input
        className="flex-1 outline-none text-lg bg-transparent text-white"
        type="number"
        name="newLocation"
        placeholder="Numero de Dimencion..."
        />
        <button type="submit">
          <IconSearch />
        </button>
        </div>
        </form>
    <article className=" bg-black/5 text-white grid justify-center items-center  p-3 gap-7 flex-wrap border-4 
     border-lime-900 rounded-md text-center ">
        <h2 className="text-[30px]  text-green-800" >Vienvenidos  a  {locationInfo?.name}</h2>
        <ul className="flex justify-center p-3 gap-20 flex-wrap items-center">
            <li> <span className="font-[900px] text-[20px]">Tipo :</span> {locationInfo?.type}</li>
            <li> <span className="font-[900px] text-[20px]">Dimencio :</span> {locationInfo?.dimension}</li>
            <li> <span className="font-[900px] text-[20px]">Poblacion:</span> {locationInfo?.residents.length}</li>
        </ul>
    </article>
   </section>
  )
}

export default Location
