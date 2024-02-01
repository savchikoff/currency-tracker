import styled from 'styled-components';


const df = ({ theme }) => theme.theme.displayValues.df;
const w48 = ({ theme }) => theme.theme.width.w48;
const s0 = ({ theme }) => theme.theme.sizes.s0;
const s1 = ({ theme }) => theme.theme.sizes.s1;
const s4 = ({ theme }) => theme.theme.sizes.s4;
const s12 = ({ theme }) => theme.theme.sizes.s12;
const s24 = ({ theme }) => theme.theme.sizes.s24;
const img20 = ({ theme }) => theme.theme.imageSizes.img20;
const posR = ({ theme }) => theme.theme.positions.posR;
const posA = ({ theme }) => theme.theme.positions.posA;
const blackColor = ({ theme }) => theme.theme.colors.black;
const whiteColor = ({ theme }) => theme.theme.colors.white;
const vibrantGreenColor = ({ theme }) => theme.theme.colors.vibrantGreen;
const center = ({ theme }) => theme.theme.additionalValues.center;

export const Label = styled.label`
	${df};
	align-items: ${center};
	gap: ${s12};
	cursor: pointer;
`;

export const Switch = styled.div`
	${posR};
	width: ${w48};
	height: 19px;
	background: ${blackColor};
	border-radius: ${s24};
	border: ${s1} solid ${whiteColor};
	padding: ${s4};
	transition: 300ms all;

	&:before {
		transition: 300ms all;
		content: '';
		${posA};
		width: ${img20};
		height: ${img20};
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
	${posA};

	&:checked + ${Switch} {
		background: ${vibrantGreenColor};

		&:before {
			transform: translate(26px, -50%);
			background: ${whiteColor};
		}
	}
`;
