import { useState, useEffect } from "react"
import Footer from "../../components/footer"

import MovicesCategory from "../../components/MoviesCategory"


export async function getStaticPaths() {
    const res = await fetch('https://best-movies-it7o7449g-jvmartinsdasilva.vercel.app/api/movies')
    // const res = await fetch("http://localhost:3000/api/movies")
    const datas = await res.json()
    const { AllMovies } = datas
    console.log(datas)

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

function movies({ category }) {
    const [datas, setDatas] = useState()

    useEffect(() => {
        const getMovies = async () => {
            try {
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
            <MovicesCategory category={category} datas={datas} />
            <Footer />
        </>
    )
}

export default movies