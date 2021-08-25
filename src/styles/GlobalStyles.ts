import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        font-size: 18px;
        box-sizing: border-box;

        --main-color: red;
        --background-color: #f5f5f5;
    }

    * {
        font-family: 'Roboto'!important; 
    }

     body {
        background-color: var(--background-color);    
        font-family: 'Roboto';    
    }
`