import { useState, useEffect } from "react"

import MovicesCategory from "../../components/MoviesCategory"


export async function getStaticPaths() {
    const res = await fetch('https://best-movies-it7o7449g-jvmartinsdasilva.vercel.app/api/movies')
    const datas = await res.json()
    const { AllMovies } = datas

    const paths = AllMovies.map((movie) => {
        return {
            params: {
                category: movie.category.toString()
            }
        }
    })
    
    return {
        paths: paths,
        fallback: false
    }
}


export async function getStaticProps(context) {
    const category = context.params.category

    return {
        props: {
            category: category
        }
    }
}

function movies({category}) {
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
        <MovicesCategory category={category} datas={datas}/>

    )
}

export default movies