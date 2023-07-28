import MovieCardContainer from "./Style"
import Link from "next/link"

const MovieCard = ({ movieInfos }) => {
    const movieId = movieInfos.id.toString()
    return (
        
        <MovieCardContainer>
            <img src={`https://image.tmdb.org/t/p/w300/${movieInfos.poster_path}`} alt='Movie post' />
            <h3>{movieInfos.title}</h3>
            <Link href={`/movie/${movieId}`}><button>MORE INFOS</button></Link>
        </MovieCardContainer>
    )
}

export default MovieCard