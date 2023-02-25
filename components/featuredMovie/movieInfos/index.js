import Link from "next/link"
import { useEffect, useState } from "react"
import MovieInfos from "../../MovieInfos"

import InfosContainer from "./Style"

const InfosMovie = ({ title, description, image, Id }) => {
    const [movieId, setMovieId] = useState()

    useEffect(() => {
        const movieFormat = Id?.toString()
        setMovieId(movieFormat)
    }, [Id])

    return (
        <InfosContainer image={image}>
            <div className="infos">
                <h2>{title}</h2>
                <p>{description}</p>
                {movieId && (
                    <Link href={`movie/${movieId}`}>
                        <button>MORE INFOS</button>
                    </Link>
                )}
            </div>
        </InfosContainer>
    )
}

export default InfosMovie