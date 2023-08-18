import { ButtonMoereInfos } from "../Buttons/MoreInfos"
import MovieCardContainer from "./Style"

const MovieCard = ({ movieInfos }) => {
    const movieId = movieInfos.id.toString()
    return (
        
        <MovieCardContainer>
            <img src={`https://image.tmdb.org/t/p/w300/${movieInfos.poster_path}`} alt='Movie post' />
            <h3>{movieInfos.title}</h3>
            <ButtonMoereInfos goTo={`/movie/${movieId}`} />
        </MovieCardContainer>
    )
}

export default MovieCard