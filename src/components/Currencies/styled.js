import styled from "styled-components";

const CurrenciesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 88px;

    @media (max-width: 1200px){
        gap: 48px;
    }
`

export default CurrenciesContainer;