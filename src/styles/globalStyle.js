import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
    }

    html {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
`;

export default GlobalStyles;
