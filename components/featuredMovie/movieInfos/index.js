import InfosContainer from "./Style"

const InfosMovie = ({title, description, image}) => {
    return(
        <InfosContainer image={image}>
            <div className="infos">
                <h2>{title}</h2>
                <p>{description}</p>
                <button>VER MAIS</button>
            </div>
        </InfosContainer>
    )
}

export default InfosMovie