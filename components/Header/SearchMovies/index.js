import { useEffect, useState } from "react"
import SearchContainer from "./Style"
import ResultComponent from "./SearchResults"


const SearchComponent = ({ datas }) => {
    const [searchValue, setSearchValue] = useState()
    const [allMovies, setAllMovies] = useState([])



    return (
        <SearchContainer>
            {console.log(allMovies)}
            <input
                type='text'
                placeholder="Pesquisar por filme"
                onChange={e => setSearchValue(e.target.value)}
            />

            {searchValue && (
                <div className="results">
                    <ResultComponent movieName={searchValue} />
                    <ResultComponent movieName={searchValue} />
                    <ResultComponent movieName={searchValue} />
                </div>
            )}
        </SearchContainer>
    )
}

export default SearchComponent