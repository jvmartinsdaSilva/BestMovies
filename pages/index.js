import { useEffect, useState } from "react"




const Home = () => {
    const [movies, setMovies] = useState()

    useEffect(() => {
        const getMovies = async () => {
            const res = await fetch('../api/movies')
            const { AllMovies } = await res.json()
            setMovies(AllMovies)
        }
        getMovies()

    }, [])

    return (
        <>
            {console.log(movies)}
            <h1>Olá</h1>
        </>
    )
}

export default Home
