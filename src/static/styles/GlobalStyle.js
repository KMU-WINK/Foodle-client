import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300;1,400;1,500&display=swap')
      format("woff");
    font-weight: normal;
    font-style: normal;
    unicode-range: U+0041-005A, U+0061-007A;
  }

  @font-face {
    font-family: 'Noto Sans CJK KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500&display=swap')
      format("woff");
    font-weight: normal;
    font-style: normal;
    unicode-range: U+AC00-U+D7A3;
  }

  * {
    margin: 0;
    padding: 0;  
    font-family: 'Roboto', 'Noto Sans CJK KR', sans-serif;
  }

  body {
    box-sizing: border-box;
  }
  
  body {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  body::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
