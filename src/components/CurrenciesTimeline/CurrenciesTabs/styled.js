import styled from 'styled-components';

export const Tab = styled.button`
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  color: #FFFFFF;
  background: #202025;
  border: 0;
  border-bottom: 2px solid transparent;
  border-radius: 8px;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid #474747;
    opacity: 1;
  `}
`;

export const TabContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const CurrencyName = styled.span`
  font-size: 16 px;
`;

export const CurrencyImg = styled.img`
  width: 30px;
  height: 30px;
`


export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  flex-wrap: wrap;
`;