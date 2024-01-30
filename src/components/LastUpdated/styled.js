import styled from "styled-components";

export const LastUpdatedContainer = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    padding: 64px 0;
    gap: 24px;

    @media (max-width: 1200px){
        padding: 48px 0;
    }

    @media (max-width: 768px){
        padding: 32px 0;
    }

    @media (max-width: 500px){
        gap: 8px;
    }
`

export const BlinkingDot = styled.span`
    width: 40px;
    height: 40px;
    display: inline-block;
    position: relative;
    
    &::after,&::before{
        content: '';  
        box-sizing: border-box;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 4px solid #00BC4F;
        position: absolute;
        left: 0;
        top: 0;
        animation: scaling 2s linear infinite;
    }

    &::after{
        animation-delay: 1s;
    }

    @keyframes scaling {
        0% {
          transform: scale(0);
          opacity: 1;
        }
        100% {
          transform: scale(1);
          opacity: 0;
        }
    }

    @media (max-width: 500px){
        width: 24px;
        height: 24px;
        &::after,&::before{
            width: 24px;
            height: 24px;
            border: 2px solid #00BC4F;
        }
    }

`

export const LastUpdatedInfo = styled.span`
    font-size: 32px;
    font-weight: 300;
    
    @media (max-width: 1200px){
        font-size: 24px
    }

    @media (max-width: 500px){
        font-size: 16px;
    }
`;