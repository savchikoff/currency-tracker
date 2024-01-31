import styled from "styled-components";

export const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 113px;

    @media (max-width: 1200px){
        min-height: 96px;
    }
    
    @media (max-width: 768px){
        min-height: 80px;
    }
`

export const NavbarLogo = styled.img`
    height: 40px;
    user-select: none;
    
    @media (max-width: 768px){
        height: 32px;
    }
`

export const NavbarLinks = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 115px;
    justify-content: space-between;
    list-style-type: none;
    transition: 0.3s;
    padding: 0;

    a{
        font-size: 20px;
        transition: all 0.3s ease;
        &:hover{
            color: #00BC4F;
        }
    }

    .active{
        color: #00BC4F;
    }

    @media (max-width: 1200px){
        gap: 48px;
    }

    @media (max-width: 768px){
        gap: 20px;
        a{
            font-size: 16px;
        }
    }

    @media (max-width: 500px){
        gap: 16px;
        a{
            font-size: 12px;
        }
    }
`