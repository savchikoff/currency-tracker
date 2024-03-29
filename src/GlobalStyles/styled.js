import { createGlobalStyle } from 'styled-components';

const s0 = ({ theme }) => theme.themeType.sizes.s0;
const themeBgColor = ({ theme }) => theme.themeType.themeColors.background;
const themeTextColor = ({ theme }) => theme.themeType.themeColors.text;
const fontLight = ({ theme }) => theme.themeType.fontWeights.light;

const GlobalStyle = createGlobalStyle`
  body {
    color: ${themeTextColor};
    background-color: ${themeBgColor};
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
    margin: ${s0};
  } 

  a{
    font-weight: ${fontLight};
    text-decoration: none;
    color: inherit;
  }

  .root{
  margin: ${s0} auto;
}
`;

export default GlobalStyle;
