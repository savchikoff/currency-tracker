import styled from "styled-components";

export const CardContainer = styled.div`
    min-width: 520px;
    color: #FFFFFF;
    background-color: #202025;
    border: 1px solid #474747;
    border-radius: 8px;
    padding: 32px;
    transition: all 0.3s ease-out;
    &:hover{
        transform: scale(1.05);
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    gap: 30px;
`;

export const CardImage = styled.img``;

export const CardTextContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const CardHeader = styled.span`
    font-size: 35px;
    font-weight: 400;
`

export const CardValue = styled.p`
    font-size: 32px;
    font-weight: 300;
`