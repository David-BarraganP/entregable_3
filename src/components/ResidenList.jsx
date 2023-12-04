import ResidenCard from "./ResidenCard"
import {paginationLogic }from  "../utils/paginatio"
import { useEffect, useState } from "react"

const ResidenList = ({residents}) => {
  const [currentPage, setCurrentPage] = useState(1)
  
  const {pages,residenInCurrenPage} = paginationLogic(currentPage,  residents)

  const handleNewPage = (newPage) => {
    setCurrentPage(newPage)
  }

  useEffect(() => {
    setCurrentPage(1)
  },[residents])
   
  return (
   <section className="max-w-[1200px] mx-auto w-auto">
     <section className="grid gap-8 grid-cols-[repeat(auto-fill,_250px)] justify-center
      bg-black/5 text-white  overflow-hidden shadow-lg shadow-black/10">
        {
            residenInCurrenPage.map((resident) => (
            <ResidenCard  key={resident} residentURL={resident}/>
            ))}
    </section>
    {/* pagination */}
    <ul className="flex justify-center p-4 gap-10 flex-wrap items-center bg-black/5">
      {
        pages.map((page) => (
           <li key={page}>
          <button  className={`${currentPage === page 
          ? "bg-green-800 p-2 text-white rounded-md"
          : "bg-black p-2 text-white rounded-md"
          }`}
          onClick={() => handleNewPage(page)}>{page}</button>
        </li> ))
      }
    </ul>

   </section>
  )
}

export default ResidenList
