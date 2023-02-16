import { useEffect, useState } from "react"
import LoadComponent from "../LoadComponent"
import InfosMovie from "./movieInfos"
import FeaturedMovieContainer from "./Style"

const FeaturedMovie = ({ datas }) => {
    const [movie, setMovie] = useState({})

    useEffect(() => {
        if (datas) {
            const movieCategory = datas.filter((movie) => movie.category === 'bestmovies')
            const [moviesInfos] = movieCategory
            const { movies } = moviesInfos
            getMovie(movies)
        }
    }, [datas])

    const getMovie = (movies) => {
        const randow = Math.floor(Math.random() * movies.length)
        const randowMovie = movies[randow]

        setMovie(randowMovie)
    }

    return (
        <FeaturedMovieContainer>
            {movie
                ? <InfosMovie
                 title={movie.title}
                 description={movie.overview}
                 image={movie.backdrop_path}
                  />
                : <LoadComponent />
            }
        </FeaturedMovieContainer>
    )
}

export default FeaturedMovie