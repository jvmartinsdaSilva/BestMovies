import styled from "styled-components";


const InfosContainer = styled.div`
    width: inherit;
    height: inherit;
    background-image: url('https://image.tmdb.org/t/p/original${props => props.image}');
    background-position:center;
    background-size:cover ;

    .infos{
        display: flex;
        flex-direction: column;
        width: inherit;
        height: inherit;
        background-image: linear-gradient(to right, #151612 25%, transparent 65%);     
        color: ${({ theme }) => theme.colors.text};
    }
    
    .infos::after{
        display: flex;
        content: '';
        justify-content: space-between;
        width: inherit;
        height: inherit;
        background-image: linear-gradient(to top, #151612 10%, transparent 90%);     
    }

    h2{
        margin:  1em;
        font-size: 20px;
        font-weight: bold;
        
    }

    p{
        max-width: 60%;
        margin: .5em 2em;
        font-size: 13px;
        font-weight: bold;
        opacity: 0.8;

    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: .5em 2em;
        padding: 1em;
        width: 100px;
        height: 40px;
        font-weight: bold;
        border: none;
        cursor: pointer;
    }

    @media screen and (min-width: 768px) {

        h2{
            font-size: 50px;
            margin: 1.5em;
        }        

        p{
            font-size: 20px;
            margin: 1em 4em;
        }

        button{
            margin-top: 5em;
            margin: 1.5em 6em;
        }


    }
`

export default InfosContainer