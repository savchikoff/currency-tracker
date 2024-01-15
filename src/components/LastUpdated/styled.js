import styled from "styled-components";

export const LastUpdatedContainer = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    padding: 64px 0;
    gap: 27px;
`

export const LastUpdatedDotOuter = styled.div`
    position: relative;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: #007431;
    animation: blink 1s linear infinite;

    @keyframes blink {
        25% {
            opacity: 0.5;
        }
        50% {
            opacity: 0;
        }
        75% {
            opacity: 0.5;
        }
    }
`;

export const LastUpdatedDotInner = styled.div`
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #00BC4F;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const LastUpdatedInfo = styled.div`
    font-size: 32px;
    font-weight: 300;
`;