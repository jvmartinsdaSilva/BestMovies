import styled from "styled-components";


const MovieInfosContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.colors.text2};
    
    img{
        margin-bottom: 1em;
    }
    
    h2{
        margin: .5em;
        font-size: 30px;
        color: ${({ theme }) => theme.colors.text};
    }
    
    h3{
        margin: 0 1em;
        margin-top: -.5em;
    }

    p{
        margin: 1em;
    }

    @media screen and (min-width: 768px){
        img{
            max-height: 600px;
        }

        h2, p{
            margin: 1em;
        }

        p{
            text-align: start;
            font-size: 22px;
            
        }
    }

`

export default MovieInfosContainer