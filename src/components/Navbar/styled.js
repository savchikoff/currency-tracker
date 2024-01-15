import styled from "styled-components";

export const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 113px;
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
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 300;
        text-decoration: none;

        &:hover{
            color: #00BC4F;
        }

        &:active{
            color: #00BC4F;
            text-decoration: underline;
        }
    }
`