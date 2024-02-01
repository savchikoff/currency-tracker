import styled from 'styled-components';

const dfc = ({ theme }) => theme.theme.displayValues.dfc;
const df = ({ theme }) => theme.theme.displayValues.df;
const s0 = ({ theme }) => theme.theme.sizes.s0;
const s2 = ({ theme }) => theme.theme.sizes.s2;
const s8 = ({ theme }) => theme.theme.sizes.s8;
const s12 = ({ theme }) => theme.theme.sizes.s12;
const s16 = ({ theme }) => theme.theme.sizes.s16;
const s20 = ({ theme }) => theme.theme.sizes.s20;
const s24 = ({ theme }) => theme.theme.sizes.s24;
const s32 = ({ theme }) => theme.theme.sizes.s32;
const s40 = ({ theme }) => theme.theme.sizes.s40;
const s48 = ({ theme }) => theme.theme.sizes.s48;
const w250 = ({ theme }) => theme.theme.width.w250;
const center = ({ theme }) => theme.theme.additionalValues.center;
const transparent = ({ theme }) => theme.theme.additionalValues.transparent;
const none = ({ theme }) => theme.theme.additionalValues.none;
const inherit = ({ theme }) => theme.theme.additionalValues.inherit;
const greenGradient = ({ theme }) => theme.theme.colors.greenGradient;
const gravelColor = ({ theme }) => theme.theme.colors.gravel;
const mediumScreen = ({ theme }) => theme.theme.breakpoints.medium;
const themeTextColor = ({ theme }) => theme.theme.themeColors.text;
const smallScreen = ({ theme }) => theme.theme.breakpoints.small;

export const ContactsContainer = styled.div``;

export const ContactsWrapper = styled.div`
	${dfc};
	align-items: ${center};
	gap: ${s32};
`;

export const ContactsTextWrapper = styled.div`
	${dfc};
	align-items: ${center};
`;

export const ContactsHeader = styled.h2`
	font-size: ${s48};
	text-align: ${center};
	background: ${greenGradient};
	-webkit-background-clip: text;
	-webkit-text-fill-color: ${transparent};

	@media (max-width: ${mediumScreen}) {
		font-size: ${s40};
	}

	@media (max-width: ${smallScreen}) {
		font-size: ${s24};
	}
`;

export const ContactsText = styled.p`
	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;

export const InputWrapper = styled.div`
	${df};
	align-items: ${center};
	gap: ${s16};
`;

export const MailInput = styled.input`
	font-family: ${inherit};
	min-width: ${w250};
	border: ${none};
	border-bottom: ${s2} solid ${gravelColor};
	outline: ${s0};
	font-size: ${s20};
	color: ${themeTextColor};
	padding: ${s8} ${s0};
	background: ${transparent};
	transition: border-color 0.2s;
	&:focus {
		border-image: ${greenGradient};
		border-image-slice: 1;
	}

	@media (max-width: ${mediumScreen}) {
		font-size: ${s16};
	}

	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;
