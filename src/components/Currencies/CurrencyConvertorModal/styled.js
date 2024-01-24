import styled from "styled-components";

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

export const CurrenciesContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const Label = styled.div`
  font-weight: 300px;
`

export const CurrentCurrency = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const ConvertibleCurrency = styled(CurrentCurrency)``;

export const CurrencyContainer = styled.div`
  padding: 8px;
  border: 1px solid #474747;
  border-radius: 8px;
`;

export const CurrencyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CurrencyImage = styled.img`
  width: 30px;
  height: 30px;
`;
export const CurrencyName = styled.span`

`;

export const ConvertedAmount = styled.span`
  font-weight: 600;
`;