import styled from "styled-components";

export const Main = styled.div`
  font-family: inherit;
`;

export const DropDownContainer = styled.div`
`;

export const DropDownHeader = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px;
  font-weight: 300;
  background: #202025;
  border: 1px solid #474747;
  border-radius: 8px;
  position: relative;
  z-index: 2;
`;

export const CurrencyImage = styled.img`
  width: 30px;
  height: 30px;
`
export const CurrencyName = styled.span``

export const DropDownListContainer = styled.div`
    position: absolute;
    z-index: 1;
`;

export const DropDownList = styled.ul`
  padding: 0;
  background: #202025;
  border: 1px solid #474747;
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: 300;
  &:not(:last-child){
    border-bottom: 1px solid #474747;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  padding: 8px;
  &:not(:last-child){
    border-bottom: 1px solid #474747;
  }
`;