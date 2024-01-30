import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding-top: 33px;
    padding-bottom: 59px;
    background: linear-gradient(74deg, #00B03A 7.59%, rgba(1, 185, 61, 0.45) 92%);
`

export const HeaderWrapper = styled.div`
    display: flex;
    gap: 90px;
    @media (max-width: 1200px){
        justify-content: center;
    }
`

export const HeaderTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 1200px){
        align-items: center;
    }
`

export const HeaderTitle = styled.h1`
    font-size: 76px;
    text-align: right;
    background: linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 1200px){
        text-align: center;
    }
`

export const HeaderText = styled.p`
    font-size: 25px;
    font-weight: 300;
    text-align: center;
`

export const HeaderImage = styled.img`
    @media (max-width: 1200px){
        display: none;
    }
`;