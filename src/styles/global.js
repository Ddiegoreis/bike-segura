import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 62.5%;
        font-family: 'Nunito', sans-serif;
        scroll-behavior: smooth;
    }

    input, button {
        background: transparent;
        margin: 0;
        padding: 0;
    }
`
