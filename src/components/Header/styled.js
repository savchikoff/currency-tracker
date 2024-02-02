import styled from 'styled-components';

const df = ({ theme }) => theme.theme.displayValues.df;
const dfc = ({ theme }) => theme.theme.displayValues.dfc;
const s12 = ({ theme }) => theme.theme.sizes.s20;
const s20 = ({ theme }) => theme.theme.sizes.s20;
const s24 = ({ theme }) => theme.theme.sizes.s24;
const s32 = ({ theme }) => theme.theme.sizes.s32;
const s48 = ({ theme }) => theme.theme.sizes.s48;
const s56 = ({ theme }) => theme.theme.sizes.s56;
const s64 = ({ theme }) => theme.theme.sizes.s64;
const s72 = ({ theme }) => theme.theme.sizes.s72;
const headerThemeGradientColor = ({ theme }) => theme.theme.themeColors.headerGradient;
const greenGradient = ({ theme }) => theme.theme.colors.greenGradient;
const whiteColor = ({ theme }) => theme.theme.colors.white;
const largeScreen = ({ theme }) => theme.theme.breakpoints.large;
const mediumScreen = ({ theme }) => theme.theme.breakpoints.medium;
const smallScreen = ({ theme }) => theme.theme.breakpoints.small;
const fontLight = ({ theme }) => theme.theme.fontWeights.light;
const center = ({ theme }) => theme.theme.additionalValues.center;
const transparent = ({ theme }) => theme.theme.additionalValues.transparent;
const none = ({ theme }) => theme.theme.additionalValues.none;

export const HeaderContainer = styled.header`
	padding-top: ${s32};
	padding-bottom: ${s56};
	background: ${headerThemeGradientColor};

	@media (max-width: ${mediumScreen}) {
		padding-top: ${s20};
		padding-bottom: ${s48};
	}

	@media (max-width: ${smallScreen}) {
		padding-top: ${s12};
		padding-bottom: ${s20};
	}
`;

export const HeaderWrapper = styled.div`
	${df};
	gap: 90px;
	align-items: center;
	@media (max-width: ${largeScreen}) {
		justify-content: ${center};
	}
`;

export const HeaderTextContainer = styled.div`
	${dfc};
	align-items: flex-end;
	@media (max-width: ${largeScreen}) {
		align-items: ${center};
	}
`;

export const HeaderTitle = styled.h1`
	font-size: ${s72};
	text-align: right;
	background: ${greenGradient};
	-webkit-background-clip: text;
	-webkit-text-fill-color: ${transparent};
	@media (max-width: ${largeScreen}) {
		font-size: ${s64};
		text-align: ${center};
	}

	@media (max-width: ${smallScreen}) {
		font-size: ${s32};
	}
`;

export const HeaderText = styled.p`
	font-size: ${s24};
	font-weight: ${fontLight};
	color: ${whiteColor};
	text-align: ${center};
	@media (max-width: ${largeScreen}) {
		font-size: ${s20};
	}

	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;

export const HeaderImage = styled.img`
	width: 300px;
	height: 300px;
	@media (max-width: ${mediumScreen}) {
		display: ${none};
	}
`;
