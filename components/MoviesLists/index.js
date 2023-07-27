import MoviesListsContainer from "./Style";
import ListCategory from "./ListCategory";
import { useEffect, useState } from "react";


const MoviesLists = ({datas}) => {
    const [movies, setMovies] = useState()

    useEffect(() => {
        if(datas){
            const [categoryIgnore, ...categorys] = datas
            setMovies(categorys)
        }

    }, [datas])

    return (
        <MoviesListsContainer>
            {movies?.map((movie) => (
                <ListCategory
                 movieInfos={movie}
                 key={movie.category}/>
            ))}
        </MoviesListsContainer>
    )
}

export default MoviesLists