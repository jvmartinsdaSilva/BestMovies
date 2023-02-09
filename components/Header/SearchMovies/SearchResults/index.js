import ResultContainer from "./Style"

const ResultComponent = ({movieName}) => {
    return(
        <ResultContainer>
            <h2>{movieName}</h2>
        </ResultContainer>
    )
}

export default ResultComponent