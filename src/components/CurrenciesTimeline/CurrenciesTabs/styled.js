import styled from 'styled-components';

const df = ({ theme }) => theme.theme.displayValues.df;
const dg = ({ theme }) => theme.theme.displayValues.dg;
const s0 = ({ theme }) => theme.theme.sizes.s0;
const s2 = ({ theme }) => theme.theme.sizes.s2;
const s4 = ({ theme }) => theme.theme.sizes.s4;
const s8 = ({ theme }) => theme.theme.sizes.s8;
const s12 = ({ theme }) => theme.theme.sizes.s12;
const s16 = ({ theme }) => theme.theme.sizes.s16;
const s32 = ({ theme }) => theme.theme.sizes.s32;
const img30 = ({ theme }) => theme.theme.imageSizes.img30;
const img24 = ({ theme }) => theme.theme.imageSizes.img24;
const whiteColor = ({ theme }) => theme.theme.colors.white;
const tabBg = ({ theme }) => theme.theme.themeColors.cardBg;
const smallScreen = ({ theme }) => theme.theme.breakpoints.small;
const mediumScreen = ({ theme }) => theme.theme.breakpoints.medium;
const inherit = ({ theme }) => theme.theme.additionalValues.inherit;
const center = ({ theme }) => theme.theme.additionalValues.center;
const transparent = ({ theme }) => theme.theme.additionalValues.transparent;

export const Tab = styled.button`
	font-family: ${inherit};
	padding: ${s8} ${s32};
	cursor: pointer;
	opacity: 0.6;
	color: ${whiteColor};
	background: ${tabBg};
	border: ${s0};
	border-bottom: ${s2} solid ${transparent};
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
	${df};
	align-items: ${center};
	justify-content: ${center};
	gap: ${s8};
`;

export const CurrencyName = styled.span`
	font-size: ${s16};

	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;

export const CurrencyImg = styled.img`
	width: ${img30};
	height: ${img30};
	@media (max-width: ${mediumScreen}) {
		width: ${img24};
		height: ${img24};
	}
`;

export const ButtonGroup = styled.div`
	${dg};
	grid-template-columns: repeat(3, 1fr);
	gap: ${s8};

	@media (max-width: ${smallScreen}) {
		gap: ${s4};
		grid-template-columns: repeat(2, 1fr);
	}
`;
