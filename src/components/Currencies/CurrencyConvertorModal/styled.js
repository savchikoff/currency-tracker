import styled from 'styled-components';

const df = ({ theme }) => theme.theme.displayValues.df;
const s0 = ({ theme }) => theme.theme.sizes.s0;
const s1 = ({ theme }) => theme.theme.sizes.s1;
const s2 = ({ theme }) => theme.theme.sizes.s2;
const s8 = ({ theme }) => theme.theme.sizes.s8;
const s12 = ({ theme }) => theme.theme.sizes.s12;
const s16 = ({ theme }) => theme.theme.sizes.s16;
const s20 = ({ theme }) => theme.theme.sizes.s20;
const img30 = ({ theme }) => theme.theme.imageSizes.img30;
const img20 = ({ theme }) => theme.theme.imageSizes.img20;
const fontLight = ({ theme }) => theme.theme.fontWeights.light;
const fontSemiBold = ({ theme }) => theme.theme.fontWeights.semiBold;
const themeTextColor = ({ theme }) => theme.theme.themeColors.text;
const greenGradient = ({ theme }) => theme.theme.colors.greenGradient;
const gravelColor = ({ theme }) => theme.theme.colors.gravel;
const smallScreen = ({ theme }) => theme.theme.breakpoints.small;
const transparent = ({ theme }) => theme.theme.additionalValues.transparent;
const inherit = ({ theme }) => theme.theme.additionalValues.inherit;
const none = ({ theme }) => theme.theme.additionalValues.none;
const center = ({ theme }) => theme.theme.additionalValues.center;

export const AmountInput = styled.input`
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

export const CurrenciesContainer = styled.div`
	${df};
	gap: ${s20};
`;

export const Label = styled.label`
	font-weight: ${fontLight};

	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;

export const CurrentCurrency = styled.div`
	${df};
	align-items: ${center};
	gap: ${s8};
`;

export const ConvertibleCurrency = styled(CurrentCurrency)``;

export const CurrencyContainer = styled.div`
	padding: ${s8};
	border: ${s1} solid ${gravelColor};
	border-radius: ${s8};
`;

export const CurrencyWrapper = styled.div`
	${df};
	align-items: ${center};
	gap: ${s8};
`;

export const CurrencyImage = styled.img`
	width: ${img30};
	height: ${img30};

	@media (max-width: ${smallScreen}) {
		width: ${img20};
		height: ${img20};
	}
`;
export const CurrencyName = styled.span``;

export const ConvertedAmount = styled.span`
	font-weight: ${fontSemiBold};

	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;
