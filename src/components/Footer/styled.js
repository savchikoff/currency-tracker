import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 40px 0;
    gap: 55px; 
`

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FooterNavigation = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 120px;
`

export const FooterInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 482px;
`

export const FooterTitle = styled.div`
    display: flex;
    gap: 18px;
`

export const FooterLogo = styled.img`
    user-select: none;
`

export const FooterHeader = styled.h3`
    font-size: 26px;
    font-weight: 600;
    background: linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const FooterText = styled.p`
    font-size: 24px;
    color: ${props => props.theme.theme.colors.text};
    font-weight: 300;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    gap: 125px;
`

export const Copyright = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    color: #898989;
    font-size: 24px;
    font-family: 'Inter', sans-serif;
`