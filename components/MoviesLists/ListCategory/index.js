import { useEffect, useState } from "react";

import ListCategoryContainer from "./Style";
import MovieCard from "../../MovieCard";
import Link from "next/link";

const ListCategory = ({ movieInfos }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const { movies } = movieInfos
        const filtterMovies = movies?.splice(0, 10)
        setMovies(filtterMovies)

    }, [movieInfos])

    return (
        <ListCategoryContainer>
            <h2>{movieInfos.category}</h2>
            <ul>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movieInfos={movie} />
                ))}

                <li className="moreMovies">
                    <Link href={`/movies/${movieInfos.category}`}>
                        <button>
                        More  <br/> 
                        Movies
                        </button>
                    </Link>
                </li>
            </ul>
        </ListCategoryContainer>
    )
}

export default ListCategory