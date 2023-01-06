import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;

        
    }

    body {
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        font-smooth: antialiased;
    }

    button {
        border: none;
        padding: 1rem 2rem;

    }
`;
