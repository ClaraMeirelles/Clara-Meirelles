import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
    }

    button{
        border-radius: 30px;
        background-color:  rgba(3, 236, 236, 0.3);
        border-color:  rgba(3, 236, 236, 1);
        color: rgb(236, 247, 244);
    }

    button:hover{
        background-color:  rgba(0, 160, 160, 0.6);
  
    }
`