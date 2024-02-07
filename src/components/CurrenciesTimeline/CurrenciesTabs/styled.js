import styled from 'styled-components';

const s0 = ({ theme }) => theme.themeType.sizes.s0;
const s2 = ({ theme }) => theme.themeType.sizes.s2;
const s4 = ({ theme }) => theme.themeType.sizes.s4;
const s8 = ({ theme }) => theme.themeType.sizes.s8;
const s12 = ({ theme }) => theme.themeType.sizes.s12;
const s16 = ({ theme }) => theme.themeType.sizes.s16;
const s32 = ({ theme }) => theme.themeType.sizes.s32;
const whiteColor = ({ theme }) => theme.themeType.colors.white;
const tabBg = ({ theme }) => theme.themeType.themeColors.cardBg;
const smallScreen = ({ theme }) => theme.themeType.breakpoints.small;
const mediumScreen = ({ theme }) => theme.themeType.breakpoints.medium;

export const Tab = styled.button`
	font-family: inherit;
	padding: ${s8} ${s32};
	cursor: pointer;
	opacity: 0.6;
	color: ${whiteColor};
	background: ${tabBg};
	border: ${s0};
	border-bottom: ${s2} solid transparent;
	border-radius: ${s8};
	outline: ${s0};
	${({ active }) =>
		active &&
		`
    		border-bottom: 2px solid #474747;
    		opacity: 1;
  `}
`;

export const TabContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: ${s8};
`;

export const CurrencyName = styled.span`
	font-size: ${s16};

	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;

export const CurrencyImg = styled.img`
	width: 30px;
	height: 30px;
	@media (max-width: ${mediumScreen}) {
		width: 24px;
		height: 24px;
	}
`;

export const ButtonGroup = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: ${s8};

	@media (max-width: ${smallScreen}) {
		gap: ${s4};
		grid-template-columns: repeat(2, 1fr);
	}
`;
