import styled, { keyframes } from 'styled-components';

const s0 = ({ theme }) => theme.themeType.sizes.s0;
const s2 = ({ theme }) => theme.themeType.sizes.s2;
const s12 = ({ theme }) => theme.themeType.sizes.s12;
const s16 = ({ theme }) => theme.themeType.sizes.s16;
const s20 = ({ theme }) => theme.themeType.sizes.s20;
const s24 = ({ theme }) => theme.themeType.sizes.s24;
const themeTextColor = ({ theme }) => theme.themeType.themeColors.text;
const mintGreenColor = ({ theme }) => theme.themeType.colors.mintGreen;
const themeBgColor = ({ theme }) => theme.themeType.themeColors.background;
const smallScreen = ({ theme }) => theme.themeType.breakpoints.small;
const mediumScreen = ({ theme }) => theme.themeType.breakpoints.medium;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const Container = styled.div`
  display: none;
  
  @media(max-width: ${mediumScreen}){
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  height: ${s20};
`;

export const Line = styled.span`
  width: ${s24};
  height: ${s2};
  background-color: ${themeTextColor};
`;

export const Menu = styled.div`
  position: fixed;
  top: ${s0};
  right: ${({ isopen }) => (isopen ? '0' : '-100%')};
  height: 100vh;
  width: 200px;
  background-color: ${themeBgColor};
  padding: ${s20};
  transition: right 0.3s ease-in-out;
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s ease-in-out;
  z-index: 1;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CloseIcon = styled.img`
  cursor: pointer;
`;


export const NavbarLinks = styled.ul`
  display: flex;
  flex-direction: column;
	gap: ${s16};;
	list-style-type: none;
	transition: 0.3s;
	padding: ${s0};

	a {
		font-size: ${s20};
		transition: all 0.3s ease;
		&:hover {
			color: ${mintGreenColor};
		}
	}

  @media (max-width: ${smallScreen}){
    gap: ${s12};
    a{
      font-size: ${s16}
    }
  }
`