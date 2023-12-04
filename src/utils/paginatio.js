const paginationLogic = (currentPage, residents) => {
    // ?cantida de residentes por pagina
    const RESIDENTS_PER_PAGE = 20

    const totalpage = Math.ceil(residents.length / RESIDENTS_PER_PAGE)

    // ? cuales son los residentes que sevan a mostrar en la pagina actual

    const sliceEnd = currentPage * RESIDENTS_PER_PAGE
    const sliceStart = sliceEnd - RESIDENTS_PER_PAGE
     const residenInCurrenPage =  residents.slice(sliceStart, sliceEnd)

    //  ? generacion de arreglos cn los numeros de las paginas que se vana mostar
const pages =[]
    for(let i = 1; i <=  totalpage; i++ ){
        pages.push(i)
    }

    return {pages, residenInCurrenPage}




}

export  {paginationLogic}

