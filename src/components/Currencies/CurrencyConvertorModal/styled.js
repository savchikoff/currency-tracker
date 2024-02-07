import styled from 'styled-components';

const s0 = ({ theme }) => theme.themeType.sizes.s0;
const s1 = ({ theme }) => theme.themeType.sizes.s1;
const s2 = ({ theme }) => theme.themeType.sizes.s2;
const s8 = ({ theme }) => theme.themeType.sizes.s8;
const s12 = ({ theme }) => theme.themeType.sizes.s12;
const s16 = ({ theme }) => theme.themeType.sizes.s16;
const s20 = ({ theme }) => theme.themeType.sizes.s20;
const fontLight = ({ theme }) => theme.themeType.fontWeights.light;
const fontSemiBold = ({ theme }) => theme.themeType.fontWeights.semiBold;
const themeTextColor = ({ theme }) => theme.themeType.themeColors.text;
const greenGradient = ({ theme }) => theme.themeType.colors.greenGradient;
const gravelColor = ({ theme }) => theme.themeType.colors.gravel;
const smallScreen = ({ theme }) => theme.themeType.breakpoints.small;

export const AmountInput = styled.input`
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

export const CurrenciesContainer = styled.div`
	display: flex;
	gap: ${s20};
`;

export const Label = styled.label`
	font-weight: ${fontLight};

	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;

export const CurrentCurrency = styled.div`
	display: flex;
	align-items: center;
	gap: ${s8};
`;

export const ConvertibleCurrency = styled(CurrentCurrency)``;

export const CurrencyContainer = styled.div`
	padding: ${s8};
	border: ${s1} solid ${gravelColor};
	border-radius: ${s8};
`;

export const CurrencyWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${s8};
`;

export const CurrencyImage = styled.img`
	width: 30px;
	height: 30px;

	@media (max-width: ${smallScreen}) {
		width: 20px;
		height: 20px;
	}
`;
export const CurrencyName = styled.span``;

export const ConvertedAmount = styled.span`
	font-weight: ${fontSemiBold};

	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;
