const getMoviesByCategory = async (categoryID) => {
    try {
        const apiKey = process.env.APY_KEY
        const categoryURL = `https://api.themoviedb.org/3/discover/movie?with_genres=${categoryID}&api_key=${apiKey}`

        const getMovies = await fetch(categoryURL)
        const { results: movies } = await getMovies.json()
        
        return movies

    } catch (err) {
        return { msg: 'Descupe, tivemos problemas ao conectar ao nosso servidor!' }
    }

}

const getBestMovies = async () => {
    try {
        const apiKey = process.env.APY_KEY

        const getMovies = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
        const { results: movies } = await getMovies.json()

        return movies

    } catch (err) {
        console.log('ERRO: ' + err)
        return { msg: 'Descupe, tivemos problemas ao conectar ao nosso servidor!' }
        // return false
    }

}


const movies = async (req, res) => {

    const bestMovies = await getBestMovies() || []
    const moviesAction = await getMoviesByCategory(28) || []
    const moviesAdventure = await getMoviesByCategory(12) || []
    const moviesComedy = await getMoviesByCategory(35) || []
    const moviesHorror = await getMoviesByCategory(27) || []
    const moviesMistery = await getMoviesByCategory(9648) || []

    res.json({
        AllMovies: [
            
            {
                category: 'bestmovies' ,
                movies: bestMovies
            },
            {
                category: 'action',
                movies: moviesAction
            },
            {
                category: 'adventure',
                movies: moviesAdventure,
            },
            {
                category: 'comedy',
                movies: moviesComedy,
            },
            {
                category: 'horror',
                movies: moviesHorror
            },
            {
                category: 'mistery',
                movies: moviesMistery
            }

        ]
    })

}

export default movies