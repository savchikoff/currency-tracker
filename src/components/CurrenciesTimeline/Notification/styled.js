import styled from 'styled-components';


const s0 = ({ theme }) => theme.theme.sizes.s0;
const s1 = ({ theme }) => theme.theme.sizes.s1;
const s8 = ({ theme }) => theme.theme.sizes.s8;
const s12 = ({ theme }) => theme.theme.sizes.s12;
const s16 = ({ theme }) => theme.theme.sizes.s16;
const s20 = ({ theme }) => theme.theme.sizes.s20;
const s24 = ({ theme }) => theme.theme.sizes.s24;
const s32 = ({ theme }) => theme.theme.sizes.s32;
const smallScreen = ({ theme }) => theme.theme.breakpoints.small;
const mediumScreen = ({ theme }) => theme.theme.breakpoints.medium;
const gravelColor = ({ theme }) => theme.theme.colors.gravel;
const cardThemeColor = ({ theme }) => theme.theme.themeColors.cardBg;

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
