import MoviesCategoryContainer from "./Style"

import Header from "../Header"
import { useState, useEffect } from "react"
import LoadComponent from "../LoadComponent"
import MovieCard from "../MovieCard"


const MovicesCategory = ({ category, datas }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        if (datas) {
            const [moviesCategory] = datas.filter((movie) => movie.category === category)
            const { movies } = moviesCategory
            setMovies(movies)
        }
    }, [datas])

    return (
        <>
            <Header datas={datas} />
            <MoviesCategoryContainer>
                <h2>{category}</h2>
                <ul>
                    {movies.length === 0
                        ? <LoadComponent />
                        : movies.map((movie) => (
                            <MovieCard key={movie.id} movieInfos={movie} />
                        ))}
                </ul>
            </MoviesCategoryContainer>
        </>
    )
}

export default MovicesCategory