import HeaderContainer from "./Style"
import SearchComponent from "./SearchMovies"


const Header = ({datas}) => {
    
    return (
        <HeaderContainer>           
            <h1>
                BEST <br />
                MOVIES
            </h1>
            <SearchComponent datas={datas}/>
        </HeaderContainer>

    )
}

export default Header