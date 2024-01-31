import styled from "styled-components";

export const ContactsContainer = styled.div``;

export const ContactsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`

export const ContactsTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContactsHeader = styled.h2`
    font-size: 48px;
    text-align: center;
    background: linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px){
        font-size: 40px;
    }

    @media (max-width: 500px){
        font-size: 24px;
    }
    
`;

export const ContactsText = styled.p`
    @media (max-width: 500px){
        font-size: 12px;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const MailInput = styled.input`
    font-family: inherit;
    min-width: 250px;
    font-weight: 300;
    border: none;
    border-bottom: 2px solid #474747;
    outline: 0;
    font-size: 20px;
    color: #FFFFFF;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    &:focus{
        border-image: linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%);
        border-image-slice: 1;
    }

    @media (max-width: 768px){
        font-size: 16px;
    }

    @media (max-width: 500px){
        font-size: 12px;
    }
`;
