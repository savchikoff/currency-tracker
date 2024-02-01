import styled from 'styled-components';

const df = ({ theme }) => theme.theme.displayValues.df;
const dib = ({ theme }) => theme.theme.displayValues.dib;
const wView = ({ theme }) => theme.theme.width.wView;
const hView = ({ theme }) => theme.theme.height.hView;
const s8 = ({ theme }) => theme.theme.sizes.s8;
const img120 = ({ theme }) => theme.theme.imageSizes.img120;
const vibrantGreenColor = ({ theme }) => theme.theme.colors.vibrantGreen;
const transparent = ({ theme }) => theme.theme.additionalValues.transparent;
const center = ({ theme }) => theme.theme.additionalValues.center;

export const LoaderContainer = styled.div`
	${df};
	align-items: ${center};
	justify-content: ${center};
	width: ${wView};
	height: ${hView};
`;

export const LoaderIcon = styled.span`
	${dib};
	width: ${img120};
	height: ${img120};
	border: ${s8} solid ${vibrantGreenColor};
	border-bottom-color: ${transparent};
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
