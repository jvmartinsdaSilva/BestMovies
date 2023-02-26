import styled from "styled-components";


const MovieInfosContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.colors.text2};

    header{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        padding: 1em;
    }

    h1{
        margin:.5em 0;
        font-weight: bold;
        font-size: 18px;
        color: transparent;
        background-image: linear-gradient(
            to left top,
            ${({theme}) => theme.colors.primary},
            ${({theme}) => theme.colors.secundary}
        );
        background-clip: text;
        -webkit-background-clip: text;     
    }
    
    a{
        text-decoration: none;
    }
    
    h2{
        margin: .5em;
        font-size: 18px;
        color: ${({ theme }) => theme.colors.text};
    }

    img{
        margin-bottom: 1em;
    }
    
    
    h3{
        margin: 0 1em;
    }

    p{
        margin: 1em;
    }

    @media screen and (min-width: 768px){
        header{
            justify-content: space-between;
        }

        img{
            max-height: 600px;
        }

        h1,h2{
            font-size: 30px;
        }

        h2, p{
            margin: 1em;
        }

        p{
            text-align: start;
            font-size: 22px;         
        }

        h3{
            margin-left: 1.5em;
        }

        h3 > span{
            color: red  !important;
        }
    }

`

export default MovieInfosContainer