import { useEffect, useState } from "react"
import SearchContainer from "./Style"
import ResultComponent from "../SearchResults"
import LoadComponent from "../../LoadComponent"
import { ButtonCloseSearch } from "../../Buttons/CloseSearchBar"
import { InpuSearch } from "../../Inputs/SearchInput"


const SearchComponent = ({ datas }) => {
    const [searchValue, setSearchValue] = useState()
    const [movies, setMovies] = useState([])

    const getMovies = new Set()

    useEffect(() => {
        const allMovies = []
        if (datas) datas.map(({ movies }) => allMovies.push(...movies))

        // it is necessary to remove duplicate movies as the same movie can be present in different categories
        const removeDuplicates = allMovies.filter((movie) => {
            const duplicates = getMovies.has(movie.title)
            getMovies.add(movie.title)

            return !duplicates
        })
        setMovies(removeDuplicates)
    }, [datas])


    const searchMovies = searchValue && movies.filter((movie) => {
        const { title } = movie
        const searchValueNormalized = searchValue.toLowerCase()
        const titleNormalized = title.toLowerCase()

        return titleNormalized.includes(searchValueNormalized)
    })

    return (
        <SearchContainer>
            <span>
                <InpuSearch handleChange={e => setSearchValue(e)} value={searchValue}/> 
                <ButtonCloseSearch handleClick={() => setSearchValue("")}/>
            </span>
            {searchValue && (
                <div className="results">
                    {movies.length === 0 ? (<LoadComponent />) :
                        searchMovies.length > 0
                            ? searchMovies.map((movie) => (
                                <ResultComponent
                                movieName={movie.title}
                                key={movie.id} 
                                img={movie.poster_path}
                                movieId={movie.id}
                                />
                            ))
                            : (<p>nothing was found</p>)
                    }
                </div>
            )}
        </SearchContainer>
    )
}

export default SearchComponent