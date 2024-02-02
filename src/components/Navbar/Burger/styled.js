import styled, { keyframes } from 'styled-components';

const dfc = ({ theme }) => theme.theme.displayValues.dfc;
const df = ({ theme }) => theme.theme.displayValues.df;
const s0 = ({ theme }) => theme.theme.sizes.s0;
const s2 = ({ theme }) => theme.theme.sizes.s2;
const s12 = ({ theme }) => theme.theme.sizes.s12;
const s16 = ({ theme }) => theme.theme.sizes.s16;
const s20 = ({ theme }) => theme.theme.sizes.s20;
const s24 = ({ theme }) => theme.theme.sizes.s24;
const posF = ({ theme }) => theme.theme.positions.posF;
const hView = ({ theme }) => theme.theme.height.hView;
const themeTextColor = ({ theme }) => theme.theme.themeColors.text;
const mintGreenColor = ({ theme }) => theme.theme.colors.mintGreen;
const themeBgColor = ({ theme }) => theme.theme.themeColors.background;
const smallScreen = ({ theme }) => theme.theme.breakpoints.small;
const mediumScreen = ({ theme }) => theme.theme.breakpoints.medium;
const none = ({ theme }) => theme.theme.additionalValues.none;

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
    ${dfc};
    align-items: flex-end;
  }
`;

export const Button = styled.button`
  ${dfc};
  justify-content: space-between;
  background: ${none};
  border: ${none};
  cursor: pointer;
  height: ${s20};
`;

export const Line = styled.span`
  width: ${s24};
  height: ${s2};
  background-color: ${themeTextColor};
`;

export const Menu = styled.div`
  ${posF};
  top: ${s0};
  right: ${({ isopen }) => (isopen ? '0' : '-100%')};
  height: ${hView};
  width: 200px;
  background-color: ${themeBgColor};
  padding: ${s20};
  transition: right 0.3s ease-in-out;
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s ease-in-out;
  z-index: 1;
`;

export const HeaderRow = styled.div`
  ${df};
  justify-content: flex-end;
`

export const CloseIcon = styled.img`
  cursor: pointer;
`;


export const NavbarLinks = styled.ul`
	${dfc};
	gap: ${s16};;
	list-style-type: ${none};
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