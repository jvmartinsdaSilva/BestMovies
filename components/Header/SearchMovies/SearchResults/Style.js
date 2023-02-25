import styled from "styled-components";

const ResultContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${({theme}) => theme.colors.text};
    padding: 1em;
    width: 100%;
    max-height: 110px;
    border-bottom: 1px solid ${({theme}) => theme.colors.text};
    cursor: pointer;


    h2{
        margin: 0 2em;
        font-size: 16px;
    }

    img{
        max-width: 100px;
        max-height: 100px;
    }


    @media screen and (min-width: 768px){
        h2{
            font-size: 30px;
        }
    }

`

export default ResultContainer