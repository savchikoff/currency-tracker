import styled from "styled-components";

export const ModalContainer = styled.div``;

export const ModalWrapper = styled.div`
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: center;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputLabel = styled.div`
    font-size: 20px;
`

export const TextInput = styled.input`
    font-family: inherit;
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
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%);
        border-image-slice: 1;
    }
`

export const SelectInput = styled.select`
    font-family: inherit;
    font-size: 35px;
    width: 100%;
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
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%);
        border-image-slice: 1;
    }
`

export const Option = styled.option`
    color: #030304;
`;