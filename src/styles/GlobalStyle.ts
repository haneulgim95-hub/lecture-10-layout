import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    a {
        color: inherit;   /*글자 색상은 부모의 색상을 물려받음.*/
        text-decoration: none;
    }
`;

export default GlobalStyle;