import styled from "styled-components";



const MovieCardContainer = styled.li`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 2em;
    min-width: 120px;
    max-width: 120px;
    height: 310px;


    h3{
        font-size: 14px;
    }

    button{
        margin: 1em 0;      
        padding: .5em 1em;
        border: none;
        background: ${({ theme }) => theme.colors.secundary};
        color: ${({ theme }) => theme.colors.text};
        cursor: pointer;
    }

`

export default MovieCardContainer