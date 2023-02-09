import styled from "styled-components"

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
        justify-content: center;
        width: 90%;
        max-height: 300px;
        background: ${({theme}) => theme.colors.backgroundTwo };
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: .5em;
        overflow: auto;
    }

    .results > div:hover{
        background: ${({theme}) => theme.colors.backgroundTwoHover};
    }

`

export default SearchContainer