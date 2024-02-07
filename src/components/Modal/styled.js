import styled, { createGlobalStyle } from 'styled-components';

const s0 = ({ theme }) => theme.theme.sizes.s0;
const s2 = ({ theme }) => theme.theme.sizes.s1;
const s8 = ({ theme }) => theme.theme.sizes.s8;
const s12 = ({ theme }) => theme.theme.sizes.s12;
const s16 = ({ theme }) => theme.theme.sizes.s16;
const s24 = ({ theme }) => theme.theme.sizes.s24;
const s32 = ({ theme }) => theme.theme.sizes.s32;
const modalBgColor = ({ theme }) => theme.theme.themeColors.modalBg;
const modalBorderColor = ({ theme }) => theme.theme.themeColors.modalBorder;
const mediumScreen = ({ theme }) => theme.theme.breakpoints.medium;

export const Background = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: ${s0};
	left: ${s0};
	z-index: 50;
`;

export const CloseIcon = styled.img`
	height: 24px;
`

export const Wrapper = styled.div`
	background-color: ${modalBgColor};
	border: ${s2} solid ${modalBorderColor};
	width: 366px;
	padding: ${s24};
	border-radius: ${s8};
	max-width: 90%;
	max-height: 90%;
	position: relative;

	@media (max-width: ${mediumScreen}) {
		padding: ${s16};
	}
`;

export const HeaderRow = styled.div`
	position: absolute;
	top: ${s12};
	right: ${s12};
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${s32};

	@media (max-width: ${mediumScreen}) {
		gap: ${s24};
	}
`;

export const ScrollDisabler = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`;
