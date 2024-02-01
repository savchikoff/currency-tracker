import styled from 'styled-components';

const dfc = ({ theme }) => theme.theme.displayValues.dfc;
const s0 = ({ theme }) => theme.theme.sizes.s0;
const s2 = ({ theme }) => theme.theme.sizes.s2;
const s8 = ({ theme }) => theme.theme.sizes.s8;
const s12 = ({ theme }) => theme.theme.sizes.s12;
const s16 = ({ theme }) => theme.theme.sizes.s16;
const s20 = ({ theme }) => theme.theme.sizes.s20;
const fontLight = ({ theme }) => theme.theme.fontWeights.light;
const themeTextColor = ({ theme }) => theme.theme.themeColors.text;
const blackColor = ({ theme }) => theme.theme.colors.black;
const coralRedColor = ({ theme }) => theme.theme.colors.coralRed;
const gravelColor = ({ theme }) => theme.theme.colors.gravel;
const greenGradient = ({ theme }) => theme.theme.colors.greenGradient;
const smallScreen = ({ theme }) => theme.theme.breakpoints.small;
const center = ({ theme }) => theme.theme.additionalValues.center;
const inherit = ({ theme }) => theme.theme.additionalValues.inherit;
const transparent = ({ theme }) => theme.theme.additionalValues.transparent;
const none = ({ theme }) => theme.theme.additionalValues.none;

export const ModalContainer = styled.div``;

export const ModalWrapper = styled.div`
	${dfc};
	gap: ${s16};
	align-items: ${center};

	@media (max-width: ${smallScreen}) {
		gap: ${s8};
	}
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
	align-items: ${center};
`;

export const InputLabel = styled.label`
	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;

export const ErrorLabel = styled.div`
	text-align: ${center};
	color: ${coralRedColor};
	text-wrap: balance;
	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;

export const TextInput = styled.input`
	font-family: ${inherit};
	font-weight: ${fontLight};
	font-size: ${s20};
	border: ${none};
	border-bottom: ${s2} solid ${gravelColor};
	outline: ${s0};
	color: ${themeTextColor};
	padding: ${s8} ${s0};
	background: ${transparent};
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
	font-family: ${inherit};
	font-weight: ${fontLight};
	font-size: ${s20};
	border: ${none};
	border-bottom: ${s2} solid ${gravelColor};
	outline: ${s0};
	color: ${themeTextColor};
	padding: ${s8} ${s0};
	background: ${transparent};
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
