import { useEffect, useState } from "react"

import Header from '../components/Header/index'
import FeaturedMovie from "../components/featuredMovie"
import MoviesLists from "../components/MoviesLists"
import Footer from "../components/Footer"

const Home = () => {
    const [datas, setDatas] = useState()

    useEffect(() => {
        const getMovies = async () => {
            try{
                const res = await fetch('../api/movies')
                const { AllMovies } = await res.json()
                setDatas(AllMovies)

            } catch (err) {
                console.log('ERRO: ' + err)
            }
        }
        getMovies()

    }, [])

    return (
        <>
            <Header datas={datas} />
            <FeaturedMovie datas={datas} />
            <MoviesLists datas={datas} />
            <Footer />
        </>
    )
}

export default Home
