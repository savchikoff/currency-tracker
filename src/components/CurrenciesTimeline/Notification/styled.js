import styled from 'styled-components';


const s0 = ({ theme }) => theme.themeType.sizes.s0;
const s1 = ({ theme }) => theme.themeType.sizes.s1;
const s8 = ({ theme }) => theme.themeType.sizes.s8;
const s12 = ({ theme }) => theme.themeType.sizes.s12;
const s16 = ({ theme }) => theme.themeType.sizes.s16;
const s20 = ({ theme }) => theme.themeType.sizes.s20;
const s24 = ({ theme }) => theme.themeType.sizes.s24;
const s32 = ({ theme }) => theme.themeType.sizes.s32;
const smallScreen = ({ theme }) => theme.themeType.breakpoints.small;
const mediumScreen = ({ theme }) => theme.themeType.breakpoints.medium;
const gravelColor = ({ theme }) => theme.themeType.colors.gravel;
const cardThemeColor = ({ theme }) => theme.themeType.themeColors.cardBg;

export const NotificationWrapper = styled.div`
	background: ${cardThemeColor};
	padding: ${s16};
	min-width: 250px;
	border-radius: ${s8};
	position: fixed;
	z-index: 300;
	top: ${s32};
	right: ${s24};
	border: ${s1} solid ${gravelColor};

	@media (max-width: ${mediumScreen}) {
		padding: ${s8};
		top: ${s20};
		right: ${s16};
	}
`;

export const NotificationTitle = styled.h3`
	margin: ${s0};

	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;

export const NotificationContent = styled.p`
	margin: ${s0};
	font-size: ${s16};

	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;
