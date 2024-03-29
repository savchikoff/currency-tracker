import styled from 'styled-components';

const s0 = ({ theme }) => theme.themeType.sizes.s0;
const s2 = ({ theme }) => theme.themeType.sizes.s2;
const s8 = ({ theme }) => theme.themeType.sizes.s8;
const s12 = ({ theme }) => theme.themeType.sizes.s12;
const s16 = ({ theme }) => theme.themeType.sizes.s16;
const s20 = ({ theme }) => theme.themeType.sizes.s20;
const s24 = ({ theme }) => theme.themeType.sizes.s24;
const s32 = ({ theme }) => theme.themeType.sizes.s32;
const s40 = ({ theme }) => theme.themeType.sizes.s40;
const s48 = ({ theme }) => theme.themeType.sizes.s48;
const greenGradient = ({ theme }) => theme.themeType.colors.greenGradient;
const gravelColor = ({ theme }) => theme.themeType.colors.gravel;
const mediumScreen = ({ theme }) => theme.themeType.breakpoints.medium;
const themeTextColor = ({ theme }) => theme.themeType.themeColors.text;
const smallScreen = ({ theme }) => theme.themeType.breakpoints.small;

export const ContactsContainer = styled.div``;

export const ContactsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${s32};
`;

export const ContactsTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ContactsHeader = styled.h2`
	font-size: ${s48};
	text-align: center;
	background: ${greenGradient};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

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
	display: flex;
	align-items: center;
	gap: ${s16};
`;

export const MailInput = styled.input`
	font-family: inherit;
	min-width: 250px;
	border: none;
	border-bottom: ${s2} solid ${gravelColor};
	outline: ${s0};
	font-size: ${s20};
	color: ${themeTextColor};
	padding: ${s8} ${s0};
	background: transparent;
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
