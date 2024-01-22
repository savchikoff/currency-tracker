import { createGlobalStyle, styled } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: #D9D9D9;
    background-color: #030304;
    font-family: 'Poppins', sans-serif;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  } 

  .root{
    margin: 0 auto;

  }
`;

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 121px;
`;

export default GlobalStyle;