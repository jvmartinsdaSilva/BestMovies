import { useState, useEffect } from "react"
import Link from "next/link"

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
                    <header>
                        <Link href='/'>
                            <h1 translate="no">
                                BEST <br/>
                                MOVIES
                            </h1>
                        </Link>
                        <h2>{movie.title}</h2>
                    </header>
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='Movie post' />
                    <h3>Original Title: {movie.original_title}</h3>
                    <h3>Release Date: {movie.release_date}</h3>
                    <h3>Avaliation: {movie.vote_average}</h3>
                    <p>{movie.overview}</p>
                    {console.log(movie)}
                </MovieInfosContainer>
            ) : <LoadComponent />}
        </>
    )
}

export default MovieInfos