import styled from 'styled-components';

const s0 = ({ theme }) => theme.theme.sizes.s0;
const s2 = ({ theme }) => theme.theme.sizes.s2;
const s8 = ({ theme }) => theme.theme.sizes.s8;
const s12 = ({ theme }) => theme.theme.sizes.s8;
const s20 = ({ theme }) => theme.theme.sizes.s20;
const s32 = ({ theme }) => theme.theme.sizes.s32;
const smallScreen = ({ theme }) => theme.theme.breakpoints.small;
const themeTextColor = ({ theme }) => theme.theme.themeColors.text;
const gravelColor = ({ theme }) => theme.theme.colors.gravel;
const greenGradient = ({ theme }) => theme.theme.colors.greenGradient;
const scheme = ({ theme }) => theme.theme.name;

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
