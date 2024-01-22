import styled, { createGlobalStyle } from "styled-components";


export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: #202025;
  border: 1px solid #474747;
  width: 500px;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  box-shadow: 0 3px 15px -3px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const HeaderRow = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const AmountInput = styled.input`
  font-family: inherit;
  font-size: 35px;
  font-weight: 300;
  width: 50%;
  border: none;
  border-bottom: 2px solid #474747;
  outline: 0;
  font-size: 17px;
  color: #FFFFFF;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  &:focus{
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%);
    border-image-slice: 1;
  }
`;

export const ChosenCurrencyContainer = styled.div`
  padding: 8px;
  border: 1px solid #474747;
  border-radius: 8px;
`;

export const ChosenCurrencyWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ChosenCurrencyImage = styled.img``;
export const ChosenCurrencyName = styled.span`

`;

export const ScrollDisabler = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`; 