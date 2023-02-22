import styled from "styled-components";


const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -1em;
    padding: 1em;
    text-align: center;
    background: ${({theme}) => theme.colors.backgroundOne};
    color: ${({theme}) => theme.colors.text};

    a{
        color: ${({theme}) => theme.colors.primary};
        text-decoration: none;
    }

    a:hover{
        text-decoration: underline;
    }

`

export default FooterContainer