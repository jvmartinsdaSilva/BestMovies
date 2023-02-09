import GlobalStyle from "../globals/globalStyled"
import { ThemeProvider } from "styled-components"
import tema from '../globals/temaStyle'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={tema}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )

}