import styled from "styled-components";


const MoviesCategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme}) => theme.colors.text};
    width: 100%;
    margin: 2em 0;

    h2{
        font-size: 40px;
        text-transform: uppercase;
    }

    ul{
        display: flex;
        flex-direction: row;
        flex: 2;
        flex-wrap: wrap;
        justify-content: center;
        margin: 2em 4em;
    }

    ul > li{
        margin: 1em;
    }

    @media screen and (min-width: 768px){
        ul{
            justify-content: start;
        }
    }

`

export default MoviesCategoryContainer