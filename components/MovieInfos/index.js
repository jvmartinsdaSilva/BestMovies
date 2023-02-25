import { useState, useEffect } from "react"

import MovieInfosContainer from "./Style"
import LoadComponent from "../LoadComponent"


const MovieInfos = ({ infos }) => {
    const [movie, setMovie] = useState()

    useEffect(() => {
        if (infos) setMovie(infos)
    }, [infos])

    return (
        <>
            {movie ? (
                <MovieInfosContainer>
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='Movie post' />
                    <h2>{movie.title}</h2>
                    <h3>Original Title: {movie.original_title}</h3>
                    <p>{movie.overview}</p>
                    {console.log(movie)}

                </MovieInfosContainer>
            ) : <LoadComponent />}
        </>
    )
}

export default MovieInfos