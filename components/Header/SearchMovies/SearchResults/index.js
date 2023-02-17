import ResultContainer from "./Style"

const ResultComponent = ({ movieName, img }) => {
    return (
        <ResultContainer>
            <img src={`https://image.tmdb.org/t/p/w300/${img}`} alt='Movie post' />
            <h2>{movieName}</h2>
        </ResultContainer>
    )
}

export default ResultComponent