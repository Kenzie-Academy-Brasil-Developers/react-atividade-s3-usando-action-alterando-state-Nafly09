import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --white: #f5f5f5;
    --black: #000000;
    --lightBlue: #C5D4F0;
    --blue: #638FE3;
    --lightGrey: #666360;
    --red: #c53030
}

button {
    cursor: pointer;
}
`;
