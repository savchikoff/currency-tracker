import styled from "styled-components";

const DatePicker = styled.input`
    color-scheme: dark;
    font-family: inherit;
    font-size: 32px;
    font-weight: 300;
    border: none;
    border-bottom: 2px solid #474747;
    outline: 0;
    font-size: 20px;
    color: #FFFFFF;
    padding: 8px 0;
    background: transparent;
    transition: border-color 0.2s;
    &:focus{
        border-image: linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%);
        border-image-slice: 1;
    }

    @media (max-width: 500px){
        font-size: 12px;
    }
`;

export default DatePicker;