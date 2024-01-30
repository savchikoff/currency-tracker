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
  z-index: 50;
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

  @media (max-width: 768px){
    padding: 16px;
  }
`;

export const HeaderRow = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px){
    gap: 24px;
  }
`;

export const ScrollDisabler = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`; 