import { useEffect, useState } from "react";
import ListCategoryContainer from "./Style";


const ListCategory = ({ movieInfos }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const {movies} = movieInfos
        const filtterMovies = movies?.splice(0, 10)
        setMovies(filtterMovies)

    }, [movieInfos])


    return (
        <ListCategoryContainer>
            {console.log(movies)}
            <h2>{movieInfos.category}</h2>
            <ul>
                {movies.map((movie) => (
                <li key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt='Movie post' />
                    <h3>{movie.title}</h3>
                    <button>MORE INFOS</button>
                </li>
                ))}

            </ul>
        </ListCategoryContainer>
    )
}

export default ListCategory