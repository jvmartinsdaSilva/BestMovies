import MovieCardContainer from "./Style"


const MovieCard = ({ movieInfos }) => {
    return (
        <MovieCardContainer>
            <img src={`https://image.tmdb.org/t/p/w300/${movieInfos.poster_path}`} alt='Movie post' />
            <h3>{movieInfos.title}</h3>
            <button>MORE INFOS</button>
        </MovieCardContainer>
    )
}

export default MovieCard