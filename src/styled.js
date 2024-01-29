import { createGlobalStyle, styled } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.theme.colors.text};
    background-color: ${props => props.theme.theme.colors.background};
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

  a{
    font-weight: 300;
    text-decoration: none;
    color: inherit;
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