import styled from 'styled-components';

const s0 = ({ theme }) => theme.themeType.sizes.s0;
const s1 = ({ theme }) => theme.themeType.sizes.s1;
const s4 = ({ theme }) => theme.themeType.sizes.s4;
const s12 = ({ theme }) => theme.themeType.sizes.s12;
const s24 = ({ theme }) => theme.themeType.sizes.s24;
const blackColor = ({ theme }) => theme.themeType.colors.black;
const whiteColor = ({ theme }) => theme.themeType.colors.white;
const vibrantGreenColor = ({ theme }) => theme.themeType.colors.vibrantGreen;

export const Label = styled.label`
	display: flex;
	align-items: center;
	gap: ${s12};
	cursor: pointer;
`;

export const Switch = styled.div`
	position: relative;
	width: 48px;
	height: 19px;
	background: ${blackColor};
	border-radius: ${s24};
	border: ${s1} solid ${whiteColor};
	padding: ${s4};
	transition: 300ms all;

	&:before {
		transition: 300ms all;
		content: '';
		position: absolute;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		top: 50%;
		left: ${s4};
		background: ${blackColor};
		border: ${s1} solid ${whiteColor};
		transform: translate(0, -50%);
	}
`;

export const Input = styled.input`
	opacity: ${s0};
	position: absolute;

	&:checked + ${Switch} {
		background: ${vibrantGreenColor};

		&:before {
			transform: translate(26px, -50%);
			background: ${whiteColor};
		}
	}
`;
