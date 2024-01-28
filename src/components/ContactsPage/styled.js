import styled from "styled-components";

export const ContactsContainer = styled.div``;

export const ContactsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const ContactsTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContactsHeader = styled.h1`
    font-size: 48px;
    background: linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const ContactsText = styled.p``;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const MailInput = styled.input`
    font-family: inherit;
    min-width: 250px;
    font-size: 35px;
    font-weight: 300;
    border: none;
    border-bottom: 2px solid #474747;
    outline: 0;
    font-size: 17px;
    color: #FFFFFF;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    &:focus{
        border-image: linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%);
        border-image-slice: 1;
    }
`;
