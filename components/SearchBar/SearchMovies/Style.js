import styled from "styled-components"
import ResultContainer from "../SearchResults/Style"

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    input{
        width: 90%;
        height: 40px;
        border: none;
        padding: .5em;
        background: ${({theme}) => theme.colors.white};
    }

    .results{
        display: flex;
        flex-direction:column ;
        width: 90%;
        max-height: 310px;
        background: ${({theme}) => theme.colors.backgroundTwo};
        z-index: 2;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        padding: 1em .5em;
        overflow: auto;
        color: white;
        font-weight: bold;
    }

    .results p{
        display: flex;
        align-items: center;
        padding: .5em;
        font-size: 22px;
        cursor: default;
    }

    .results::-webkit-scrollbar{
        display: none;
    }

    ${ResultContainer}:hover{
        background: ${({theme}) => theme.colors.backgroundTwoHover};
    }
`

export default SearchContainer