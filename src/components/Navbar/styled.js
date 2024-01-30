import styled from "styled-components";

export const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 113px;

    @media (max-width: 1120px){
        min-height: 96px;
    }
`

export const NavbarLogo = styled.img`
    user-select: none;
`

export const NavbarLinks = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 115px;
    justify-content: space-between;
    list-style-type: none;
    transition: 0.3s;

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

    @media (max-width: 1120px){
        gap: 48px;
    }
`