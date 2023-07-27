import { useState, useEffect } from "react"
import Link from "next/link"

import MovieInfosContainer from "./Style"
import LoadComponent from "../LoadComponent"
import Footer from "../footer"
import MovieDescript from "../MovieDescript"


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
                    <MovieDescript movie={movie} />
                    <Footer />
                </MovieInfosContainer>

            ) : <LoadComponent />}
        </>
    )
}

export default MovieInfos