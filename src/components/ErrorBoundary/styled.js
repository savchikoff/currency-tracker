import styled from "styled-components";

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    width: 100vw;
    height: 100vh;
`

export const ErrorIcon = styled.img`

`;

export const ErrorMessage = styled.h2`
    max-width: 300px;
    text-align: center;
    background: linear-gradient(91deg, #CE0000 0.64%, #C65D2F 29.15%, #D11616 99.51%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
