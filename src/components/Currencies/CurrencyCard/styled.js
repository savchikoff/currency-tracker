import styled from 'styled-components';

const df = ({ theme }) => theme.theme.displayValues.df;
const dfc = ({ theme }) => theme.theme.displayValues.dfc;
const s1 = ({ theme }) => theme.theme.sizes.s1;
const s8 = ({ theme }) => theme.theme.sizes.s8;
const s12 = ({ theme }) => theme.theme.sizes.s12;
const s16 = ({ theme }) => theme.theme.sizes.s16;
const s20 = ({ theme }) => theme.theme.sizes.s20;
const s24 = ({ theme }) => theme.theme.sizes.s24;
const s28 = ({ theme }) => theme.theme.sizes.s28;
const s32 = ({ theme }) => theme.theme.sizes.s32;
const img60 = ({ theme }) => theme.theme.imageSizes.img60;
const img30 = ({ theme }) => theme.theme.imageSizes.img30;
const fontNormal = ({ theme }) => theme.theme.fontWeights.normal;
const fontLight = ({ theme }) => theme.theme.fontWeights.light;
const smallScreen = ({ theme }) => theme.theme.breakpoints.small;
const mediumScreen = ({ theme }) => theme.theme.breakpoints.small;
const xLargeScreen = ({ theme }) => theme.theme.breakpoints.xLarge;
const colorWhite = ({ theme }) => theme.theme.colors.white;
const cardBg = ({ theme }) => theme.theme.themeColors.cardBg;
const gravelColor = ({ theme }) => theme.theme.colors.gravel;
const center = ({ theme }) => theme.theme.additionalValues.center;

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
	${df};
	align-items: ${center};
	gap: ${s28};
`;

export const CardImage = styled.img`
	@media (max-width: ${xLargeScreen}) {
		width: ${img60};
		height: ${img60};
	}

	@media (max-width: ${smallScreen}) {
		width: ${img30};
		height: ${img30};
	}
`;

export const CardTextContent = styled.div`
	${dfc};
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
