import Link from "next/link"
import { useEffect, useState } from "react"
import ResultContainer from "./Style"

const ResultComponent = ({ movieName, img, movieId }) => {

    return (
        <Link  href={`/movie/${movieId.toString()}` }>
        <ResultContainer>
            <img src={`https://image.tmdb.org/t/p/w300/${img}`} alt='Movie post' />
            <h2>{movieName}</h2>
        </ResultContainer>
        </Link>
    )
}

export default ResultComponent