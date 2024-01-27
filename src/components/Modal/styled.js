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
  width: 366px;
  padding: 24px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
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

export const ScrollDisabler = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`; 