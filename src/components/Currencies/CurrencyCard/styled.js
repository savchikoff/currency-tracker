import styled from 'styled-components';

const s1 = ({ theme }) => theme.themeType.sizes.s1;
const s8 = ({ theme }) => theme.themeType.sizes.s8;
const s12 = ({ theme }) => theme.themeType.sizes.s12;
const s16 = ({ theme }) => theme.themeType.sizes.s16;
const s20 = ({ theme }) => theme.themeType.sizes.s20;
const s24 = ({ theme }) => theme.themeType.sizes.s24;
const s28 = ({ theme }) => theme.themeType.sizes.s28;
const s32 = ({ theme }) => theme.themeType.sizes.s32;
const fontNormal = ({ theme }) => theme.themeType.fontWeights.normal;
const fontLight = ({ theme }) => theme.themeType.fontWeights.light;
const smallScreen = ({ theme }) => theme.themeType.breakpoints.small;
const mediumScreen = ({ theme }) => theme.themeType.breakpoints.small;
const xLargeScreen = ({ theme }) => theme.themeType.breakpoints.xLarge;
const colorWhite = ({ theme }) => theme.themeType.colors.white;
const cardBg = ({ theme }) => theme.themeType.themeColors.cardBg;
const gravelColor = ({ theme }) => theme.themeType.colors.gravel;

export const CardContainer = styled.div`
	color: ${colorWhite};
	background-color: ${cardBg};
	border: ${s1} solid ${gravelColor};
	border-radius: ${s8};
	padding: ${s32};
	transition: all 0.3s ease-out;
	&:hover {
		transform: scale(1.05);
		cursor: pointer;
	}

	@media (max-width: ${mediumScreen}) {
		padding: ${s20};
	}
	@media (max-width: ${smallScreen}) {
		padding: ${s16};
	}
`;

export const CardWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${s28};
`;

export const CardImage = styled.img`
	@media (max-width: ${xLargeScreen}) {
		width: 60px;
		height: 60px;
	}

	@media (max-width: ${smallScreen}) {
		width: 30px;
		height: 30px;
	}
`;

export const CardTextContent = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CardHeader = styled.span`
	font-size: ${s32};
	font-weight: ${fontNormal};
	@media (max-width: ${xLargeScreen}) {
		font-size: ${s24};
	}

	@media (max-width: ${mediumScreen}) {
		font-size: ${s20};
	}

	@media (max-width: ${smallScreen}) {
		font-size: ${s16};
	}
`;

export const CardValue = styled.p`
	font-size: ${s24};
	font-weight: ${fontLight};
	@media (max-width: ${xLargeScreen}) {
		font-size: ${s20};
	}

	@media (max-width: ${mediumScreen}) {
		font-size: ${s16};
	}

	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;
