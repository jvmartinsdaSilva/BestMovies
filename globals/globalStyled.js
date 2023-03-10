import { createGlobalStyle } from "styled-components";

const GlobalStyle  = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 14px;
        font-family: Sans-Serif;
        background: ${({theme}) => theme.colors.backgroundOne};
    }

    body::-webkit-scrollbar{
        display: none;
    }
    
`

export default GlobalStyle