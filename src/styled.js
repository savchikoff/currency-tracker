import { createGlobalStyle, styled } from 'styled-components';

const s0 = ({ theme }) => theme.theme.sizes.s0;
const themeBgColor = ({ theme }) => theme.theme.themeColors.background;
const themeTextColor = ({ theme }) => theme.theme.themeColors.text;
const font = ({ theme }) => theme.theme.fonts.poppins;
const fontLight = ({ theme }) => theme.theme.fontWeights.light;
const baseContainer = ({ theme }) => theme.theme.containerSizes.base;
const largeContainer = ({ theme }) => theme.theme.containerSizes.large;
const mediumContainer = ({ theme }) => theme.theme.containerSizes.medium;
const smallContainer = ({ theme }) => theme.theme.containerSizes.small;
const inherit = ({ theme }) => theme.theme.additionalValues.inherit;
const none = ({ theme }) => theme.theme.additionalValues.none;
const auto = ({ theme }) => theme.theme.additionalValues.auto;
const smallScreen = ({ theme }) => theme.theme.breakpoints.small;
const mediumScreen = ({ theme }) => theme.theme.breakpoints.medium;
const largeScreen = ({ theme }) => theme.theme.breakpoints.large;

const GlobalStyle = createGlobalStyle`
  body {
    color: ${themeTextColor};
    background-color: ${themeBgColor};
    font-family: ${font};
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
    text-decoration: ${none};
    color: ${inherit};
  }

  .root{
  margin: ${s0} ${auto};
}
`;

export const Container = styled.div`
  margin: ${s0} ${auto};
  padding: ${baseContainer};

  @media(max-width: ${largeScreen}) {
    padding: ${largeContainer};
  }

  @media(max-width: ${mediumScreen}) {
    padding: ${mediumContainer};
  }

  @media(max-width: ${smallScreen}) {
    padding: ${smallContainer};
  }
`;

export default GlobalStyle;