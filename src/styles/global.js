import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1000px) {
            font-size: 93.75%;
        }

        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: ${props => props.theme.colors.terciary};
    }

    .limit {
        max-width: 1200px;
        margin: auto;
    }

    .react-modal-content {
        background: ${props => props.theme.colors.primary};
        width: 100%;
        max-width: 576px;

        padding: 2rem 0;

        border-radius: 5px;

        margin: 0 15px;
    }

    .react-modal-overlay {
        background: #000000aa;

        display: flex;
        justify-content: center;
        align-items: center;

        position: fixed;
        top: 0;

        width: 100vw;
        height: 100vh;
    }
`