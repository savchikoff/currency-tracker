import styled from "styled-components";

export const CardContainer = styled.div`
    color: #FFFFFF;
    background-color: #202025;
    border: 1px solid #474747;
    border-radius: 8px;
    padding: 32px;
    transition: all 0.3s ease-out;
    &:hover{
        transform: scale(1.05);
        cursor: pointer;
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const CardImage = styled.img`
    @media (max-width: 1440px){
        width: 60px;
        height: 60px;
    }
`;

export const CardTextContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const CardHeader = styled.span`
    font-size: 32px;
    font-weight: 400;
    @media (max-width: 1440px){
        font-size: 24px;
    }
`

export const CardValue = styled.p`
    font-size: 24px;
    font-weight: 300;
    @media (max-width: 1440px){
        font-size: 20px;
    }
`