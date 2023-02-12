import { useEffect, useState } from "react"
import LoadComponent from "../LoadComponet"
import InfosMovie from "./movieInfos"
import ShowCaseContainer from "./Style"

const ShowCase = ({ datas }) => {
    const [movie, setMovie] = useState({})

    useEffect(() => {
        if (datas) {
            const movieCategory = datas?.filter((movie) => movie.category === 'bestmovies')
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
        <ShowCaseContainer>
            {datas
                ? <InfosMovie
                 title={movie.title}
                 description={movie.overview}
                 image={movie.backdrop_path}
                  />
                : <LoadComponent />
            }
        </ShowCaseContainer>
    )
}

export default ShowCase