import { useEffect, useState } from "react"
import ShowCase from "../components/ShowCase"
import Header from '../components/Header/index'



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
            <Header datas={datas}/>
            <ShowCase datas={datas}/>
        </>
    )
}

export default Home
