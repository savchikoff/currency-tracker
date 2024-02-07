import styled from 'styled-components';

const s8 = ({ theme }) => theme.theme.sizes.s8;
const vibrantGreenColor = ({ theme }) => theme.theme.colors.vibrantGreen;

export const LoaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`;

export const LoaderIcon = styled.span`
	display: inline-block;
	width: 120px;
	height: 120px;
	border: ${s8} solid ${vibrantGreenColor};
	border-bottom-color: transparent;
	border-radius: 50%;
	box-sizing: border-box;
	animation: rotation 1s linear infinite;

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
