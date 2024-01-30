import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 40px 0;
    gap: 55px;

    @media (max-width: 1200px){
        gap: 32px;
    }
`

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 1200px){
        justify-content: center;
    }
`

export const FooterInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 482px;
    @media (max-width: 1440px){
        max-width: 400px;
    }
`

export const FooterTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
`

export const FooterLogo = styled.img`
    user-select: none;

    @media (max-width: 768px){
        height: 32px;
    }
`

export const FooterHeader = styled.h3`
    font-size: 28px;
    font-weight: 600;
    background: linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 1440px){
        font-size: 24px;
    }

    @media (max-width: 768px){
        font-size: 16px;
    }
`

export const FooterText = styled.p`
    font-size: 24px;
    color: ${props => props.theme.theme.colors.text};
    font-weight: 300;
    @media (max-width: 1440px){
        font-size: 16px;
    }
    @media (max-width: 1200px){
        display: none;
    }
`

export const FooterNavigation = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 128px;
    margin-left: 48px;
    @media (max-width: 1440px){
        gap: 64px;
    }
    @media (max-width: 1200px){
        display: none;
    }
`

export const FooterAccordion = styled.div`
    display: none;

    @media (max-width: 1200px){
        display: block;
    }
`

export const Copyright = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    color: #898989;
    font-size: 24px;
    font-family: 'Inter', sans-serif;
    @media (max-width: 1200px){
        font-size: 20px;
    }

    @media (max-width: 768px){
        font-size: 16px
    }

    @media (max-width: 500px){
        font-size: 12px
    }
`