import { createGlobalStyle } from "styled-components";
import { backgroundColor } from "./_constants";

export const GlobalStyles = createGlobalStyle`
    :root {
        font-size: 18px;
        box-sizing: border-box!important;
    }

    * {
        font-family: 'Roboto'!important; 
        box-sizing: border-box;
    }

     body {
        background-color: ${backgroundColor};    
        font-family: 'Roboto';    
    }
`