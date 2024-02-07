import styled from 'styled-components';

const s0 = ({ theme }) => theme.theme.sizes.s0;
const s12 = ({ theme }) => theme.theme.sizes.s12;
const s16 = ({ theme }) => theme.theme.sizes.s16;
const s18 = ({ theme }) => theme.theme.sizes.s18;
const s20 = ({ theme }) => theme.theme.sizes.s20;
const s24 = ({ theme }) => theme.theme.sizes.s24;
const s28 = ({ theme }) => theme.theme.sizes.s18;
const s32 = ({ theme }) => theme.theme.sizes.s32;
const s40 = ({ theme }) => theme.theme.sizes.s40;
const s48 = ({ theme }) => theme.theme.sizes.s48;
const s56 = ({ theme }) => theme.theme.sizes.s56;
const s64 = ({ theme }) => theme.theme.sizes.s64;
const s128 = ({ theme }) => theme.theme.sizes.s128;
const greenGradient = ({ theme }) => theme.theme.colors.greenGradient;
const themeTextColor = ({ theme }) => theme.theme.themeColors.text;
const fontSemiBold = ({ theme }) => theme.theme.fontWeights.semiBold;
const fontLight = ({ theme }) => theme.theme.fontWeights.light;
const smallScreen = ({ theme }) => theme.theme.breakpoints.small;
const mediumScreen = ({ theme }) => theme.theme.breakpoints.medium;
const largeScreen = ({ theme }) => theme.theme.breakpoints.large;
const xLargeScreen = ({ theme }) => theme.theme.breakpoints.xLarge;

export const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	padding: ${s40} ${s0};
	gap: ${s56};

	@media (max-width: ${largeScreen}) {
		gap: ${s32};
	}
`;

export const FooterWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: ${largeScreen}) {
		justify-content: center;
	}
`;

export const FooterInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${s18};
	max-width: 482px;
	@media (max-width: ${xLargeScreen}}) {
		max-width: 400px;
	}
`;

export const FooterTitle = styled.div`
	display: flex;
	align-items: center;
	gap: ${s18};
`;

export const FooterLogo = styled.img`
	user-select: none;

	@media (max-width: ${mediumScreen}) {
		height: ${s32};
	}
`;

export const FooterHeader = styled.h3`
	font-size: ${s28};
	font-weight: ${fontSemiBold};
	background: ${greenGradient};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	@media (max-width: ${xLargeScreen}) {
		font-size: ${s24};
	}

	@media (max-width: ${mediumScreen}) {
		font-size: ${s16};
	}
`;

export const FooterText = styled.p`
	font-size: ${s24};
	color: ${themeTextColor};
	font-weight: ${fontLight};
	@media (max-width: ${xLargeScreen}) {
		font-size: ${s16};
	}
	@media (max-width: ${largeScreen}) {
		display: none;
	}
`;

export const FooterNavigation = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${s128};
	margin-left: ${s48};
	@media (max-width: ${xLargeScreen}) {
		gap: ${s64};
	}
	@media (max-width: ${largeScreen}) {
		display: none;
	}
`;

export const FooterAccordion = styled.div`
	display: none;

	@media (max-width: ${largeScreen}) {
		display: block;
	}
`;

export const Copyright = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	color: #898989;
	font-size: ${s24};
	font-family: 'Inter', sans-serif;
	@media (max-width: ${largeScreen}) {
		font-size: ${s20};
	}

	@media (max-width: ${mediumScreen}) {
		font-size: ${s16};
	}

	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;
