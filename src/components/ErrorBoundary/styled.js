import styled from 'styled-components';

const s24 = ({ theme }) => theme.theme.sizes.s24;
const redGradient = ({ theme }) => theme.theme.colors.redGradient;

export const ErrorContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: ${s24};
	width: 100vw;
	height: 100vh;
`;

export const ErrorIcon = styled.img``;

export const ErrorMessage = styled.h2`
	max-width: 300px;
	text-align: center;
	background: ${redGradient};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
