const infos = [
    {category: 'horror', movies:[{name: 'HF1'}, {name: "HF2"}]},
    {category: 'comedy', movies:[{name: 'CF1'}, {name: "CF2"}]},
]

const category = infos.map((item) => {
    return{
        params: {
            category: item.category
        }
    }
})

const movie = infos.map(({movies}) => {
    movies.map((movie) => {
        return{
            params: {
                category: movie.name
            }
        }
    })
})

console.log(category)