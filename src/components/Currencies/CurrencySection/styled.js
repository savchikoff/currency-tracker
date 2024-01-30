import styled from "styled-components";

export const CurrencySectionContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const CurrencySectionHeader = styled.span`
    font-size: 32px;
    color: #FFFFFF;
    font-weight: 300;
    border-bottom: 2px solid #474747;
    padding-bottom: 25px;
    margin-bottom: 50px;
    max-width: 520px;
`

export const CurrencySectionCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 184px;
    row-gap: 56px;
    
    @media (max-width: 1120px){
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`;
