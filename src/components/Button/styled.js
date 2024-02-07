import styled from 'styled-components';

const s1 = ({ theme }) => theme.themeType.sizes.s1;
const s2 = ({ theme }) => theme.themeType.sizes.s2;
const s12 = ({ theme }) => theme.themeType.sizes.s12;
const s8 = ({ theme }) => theme.themeType.sizes.s8;
const s16 = ({ theme }) => theme.themeType.sizes.s16;
const s32 = ({ theme }) => theme.themeType.sizes.s32;
const vibrantGreenColor = ({ theme }) => theme.themeType.colors.vibrantGreen;
const whiteColor = ({ theme }) => theme.themeType.colors.white;
const smallScreen = ({ theme }) => theme.themeType.breakpoints.small;


const ButtonComponent = styled.button`
	position: relative;
	display: inline-block;
	font-family: inherit;
	padding: ${s16} ${s32};
	text-align: center;
	letter-spacing: ${s1};
	text-decoration: none;
	color: ${vibrantGreenColor};
	background: transparent;
	cursor: pointer;
	transition: ease-out 0.5s;
	border: ${s2} solid ${vibrantGreenColor};
	border-radius: ${s12};
	box-shadow: inset 0 0 0 0 ${vibrantGreenColor};

	&:hover {
		color: ${whiteColor};
		box-shadow: inset 0 -100px 0 0 ${vibrantGreenColor};
	}

	&:active {
		transform: scale(0.9);
	}

	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
		padding: ${s8} ${s16};
	}
`;

export default ButtonComponent;
