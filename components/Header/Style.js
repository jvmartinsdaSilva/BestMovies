import styled from "styled-components";




const HeaderContainer = styled.header`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding:.5em;
    background: ${({theme}) => theme.colors.backgroundOne};
    max-height: 150px;
    
    a{
        text-decoration: none;
    }

    h1{
        margin:.5em 0;
        font-weight: bold;
        font-size: 22px;
        color: transparent;
        background-image: linear-gradient(
            to left top,
            ${({theme}) => theme.colors.primary},
            ${({theme}) => theme.colors.secundary}
        );
        background-clip: text;
        -webkit-background-clip: text;     
    }
`

export default HeaderContainer