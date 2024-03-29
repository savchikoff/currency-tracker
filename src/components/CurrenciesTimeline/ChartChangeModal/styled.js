import styled from 'styled-components';

const s0 = ({ theme }) => theme.themeType.sizes.s0;
const s2 = ({ theme }) => theme.themeType.sizes.s2;
const s8 = ({ theme }) => theme.themeType.sizes.s8;
const s12 = ({ theme }) => theme.themeType.sizes.s12;
const s16 = ({ theme }) => theme.themeType.sizes.s16;
const s20 = ({ theme }) => theme.themeType.sizes.s20;
const fontLight = ({ theme }) => theme.themeType.fontWeights.light;
const themeTextColor = ({ theme }) => theme.themeType.themeColors.text;
const blackColor = ({ theme }) => theme.themeType.colors.black;
const coralRedColor = ({ theme }) => theme.themeType.colors.coralRed;
const gravelColor = ({ theme }) => theme.themeType.colors.gravel;
const greenGradient = ({ theme }) => theme.themeType.colors.greenGradient;
const smallScreen = ({ theme }) => theme.themeType.breakpoints.small;

export const ModalContainer = styled.div``;

export const ModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${s16};
	align-items: center;

	@media (max-width: ${smallScreen}) {
		gap: ${s8};
	}
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
	align-items: center;
`;

export const InputLabel = styled.label`
	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;

export const ErrorLabel = styled.div`
	text-align: center;
	color: ${coralRedColor};
	text-wrap: balance;
	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;

export const TextInput = styled.input`
	font-family: inherit;
	font-weight: ${fontLight};
	font-size: ${s20};
	border: none;
	border-bottom: ${s2} solid ${gravelColor};
	outline: ${s0};
	color: ${themeTextColor};
	padding: ${s8} ${s0};
	background: transparent;
	transition: border-color 0.2s;

	&:focus {
		border-image: ${greenGradient};
		border-image-slice: 1;
	}

	@media (max-width: ${smallScreen}) {
		font-size: ${s16};
	}
`;

export const SelectInput = styled.select`
	font-family: inherit;
	font-weight: ${fontLight};
	font-size: ${s20};
	border: none;
	border-bottom: ${s2} solid ${gravelColor};
	outline: ${s0};
	color: ${themeTextColor};
	padding: ${s8} ${s0};
	background: transparent;
	transition: border-color 0.2s;

	&:focus {
		border-image: ${greenGradient};
		border-image-slice: 1;
	}

	@media (max-width: ${smallScreen}) {
		font-size: ${s16};
	}
`;

export const Option = styled.option`
	color: ${blackColor};
`;
