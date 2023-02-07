import { moviesData } from "../services/fakeDataBase"



export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/movies')
    const datas = await res.json()
    const { AllMovies } = datas
    // const AllMovies = moviesData

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

function movies(props) {
    return (
        <>

            <h1>Categoria do filme: {props.category}</h1>
        </>
    )
}

export default movies