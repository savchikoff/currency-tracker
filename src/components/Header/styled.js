import styled from 'styled-components';

const s12 = ({ theme }) => theme.themeType.sizes.s20;
const s20 = ({ theme }) => theme.themeType.sizes.s20;
const s24 = ({ theme }) => theme.themeType.sizes.s24;
const s32 = ({ theme }) => theme.themeType.sizes.s32;
const s48 = ({ theme }) => theme.themeType.sizes.s48;
const s56 = ({ theme }) => theme.themeType.sizes.s56;
const s64 = ({ theme }) => theme.themeType.sizes.s64;
const s72 = ({ theme }) => theme.themeType.sizes.s72;
const headerThemeGradientColor = ({ theme }) => theme.themeType.themeColors.headerGradient;
const greenGradient = ({ theme }) => theme.themeType.colors.greenGradient;
const whiteColor = ({ theme }) => theme.themeType.colors.white;
const largeScreen = ({ theme }) => theme.themeType.breakpoints.large;
const mediumScreen = ({ theme }) => theme.themeType.breakpoints.medium;
const smallScreen = ({ theme }) => theme.themeType.breakpoints.small;
const fontLight = ({ theme }) => theme.themeType.fontWeights.light;

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
	display: flex;
	gap: 90px;
	align-items: center;
	@media (max-width: ${largeScreen}) {
		justify-content: center;
	}
`;

export const HeaderTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	@media (max-width: ${largeScreen}) {
		align-items: center;
	}
`;

export const HeaderTitle = styled.h1`
	font-size: ${s72};
	text-align: right;
	background: ${greenGradient};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	@media (max-width: ${largeScreen}) {
		font-size: ${s64};
		text-align: center;
	}

	@media (max-width: ${smallScreen}) {
		font-size: ${s32};
	}
`;

export const HeaderText = styled.p`
	font-size: ${s24};
	font-weight: ${fontLight};
	color: ${whiteColor};
	text-align: center;
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
		display: none;
	}
`;
