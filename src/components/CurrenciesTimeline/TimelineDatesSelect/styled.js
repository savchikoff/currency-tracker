import styled from "styled-components";

export const SelectContainer = styled.div`
    font-size: 20px;
`;

export const SelectWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

export const StartDateSelect = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`

export const EndDateSelect = styled(StartDateSelect)``;

export const SelectLabel = styled.span``

export const Select = styled.select`
font-family: inherit;
font-size: 35px;
font-weight: 300;
width: 100%;
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
`;
export const SelectOption = styled.option`
    color: #030304;
`;