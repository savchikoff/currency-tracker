import styled from 'styled-components';

const s0 = ({ theme }) => theme.themeType.sizes.s0;
const s2 = ({ theme }) => theme.themeType.sizes.s2;
const s8 = ({ theme }) => theme.themeType.sizes.s8;
const s12 = ({ theme }) => theme.themeType.sizes.s8;
const s20 = ({ theme }) => theme.themeType.sizes.s20;
const s32 = ({ theme }) => theme.themeType.sizes.s32;
const smallScreen = ({ theme }) => theme.themeType.breakpoints.small;
const themeTextColor = ({ theme }) => theme.themeType.themeColors.text;
const gravelColor = ({ theme }) => theme.themeType.colors.gravel;
const greenGradient = ({ theme }) => theme.themeType.colors.greenGradient;
const scheme = ({ theme }) => theme.themeType.name;

const DatePicker = styled.input`
	color-scheme: ${scheme};
	font-family: inherit;
	font-size: ${s32};
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

	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;

export default DatePicker;
