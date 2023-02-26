import HeaderContainer from "./Style"
import SearchComponent from "./SearchMovies"
import Link from "next/link"


const Header = ({ datas }) => {

    return (
        <HeaderContainer>
            <Link href='/'>
                <h1 translate="no">
                    BEST <br />
                    MOVIES
                </h1>
            </Link>
            <SearchComponent datas={datas} />
        </HeaderContainer>

    )
}

export default Header