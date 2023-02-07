
async function getMovies() {
    const res = await fetch('../api/movies')
    const { AllMovies } = await res.json()
    console.log(AllMovies)
    return AllMovies
}

export const moviesData = getMovies()
