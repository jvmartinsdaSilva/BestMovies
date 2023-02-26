import { useState, useEffect } from "react"
import Footer from "../../components/footer"

import MovieInfos from "../../components/MovieInfos"

// it is necessary to remove duplicate movies as the same movie can be present in different categories
const removeDuplicates = (Allmovies) => {
    const setMovies = new Set()
    const movies = Allmovies.filter((movie) => {
        const duplicates = setMovies.has(movie.title)
        setMovies.add(movie.title)

        return !duplicates
    })

    return movies
}

export async function getStaticPaths() {
    const res = await fetch('https://best-movies-it7o7449g-jvmartinsdasilva.vercel.app/api/movies')
    const { AllMovies } = await res.json()

    const datas = []

    if (AllMovies) AllMovies?.map(({ movies }) => datas.push(...movies))

    const movies = removeDuplicates(datas)

    const paths = movies.map((movie) => {
        return {
            params: {
                id: movie.id.toString()
            }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { id } = context.params

    return {
        props: {
            id
        }
    }
}

const Movie = ({ id }) => {
    const [movieID, setMovieID] = useState()

    useEffect(() => {
        const getMovies = async () => {
            const datas = []

            try {
                const res = await fetch('../api/movies')
                const { AllMovies } = await res.json()

                if (AllMovies) AllMovies?.map(({ movies }) => datas.push(...movies))

                const movies = removeDuplicates(datas)

                const movie = movies.filter((movie) => movie.id.toString() === id)
                setMovieID(...movie)          
                
            } catch (err) {
                console.log('ERRO: ' + err)
            }
        }
        getMovies()
    }, [])


    return (
        <>
            <MovieInfos infos={movieID} />
            <Footer />
        </>
    )

}

export default Movie