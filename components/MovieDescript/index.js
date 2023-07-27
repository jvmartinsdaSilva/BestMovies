import Container from "./style"

const MovieDescript = ({ movie }) => {
    return (
        <>
            <Container>
                <h3>Original Title: {movie.original_title}</h3>
                <h3>Release Date: {movie.release_date}</h3>
                <h3>Avaliation: {movie.vote_average}</h3>
                <p>{movie.overview}</p>

            </Container>

        </>
    )
}

export default MovieDescript