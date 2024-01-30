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
    padding-bottom: 24px;
    margin-bottom: 48px;
    max-width: 520px;
    
    @media (max-width: 1200px){
        font-size: 24px;
        padding-bottom: 16px;
        margin-bottom: 36px;
    }

    @media (max-width: 500px){
        font-size: 20px;
        padding-bottom: 12px;
        margin-bottom: 20px;
    }
`

export const CurrencySectionCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 184px;
    row-gap: 56px;
    
    @media (max-width: 1200px){
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`;
