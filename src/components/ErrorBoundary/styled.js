import styled from 'styled-components';

const dfc = ({ theme }) => theme.theme.displayValues.dfc;
const wView = ({ theme }) => theme.theme.width.wView;
const hView = ({ theme }) => theme.theme.height.hView;
const s24 = ({ theme }) => theme.theme.sizes.s24;
const redGradient = ({ theme }) => theme.theme.colors.redGradient;
const transparent = ({ theme }) => theme.theme.additionalValues.transparent;
const center = ({ theme }) => theme.theme.additionalValues.center;

export const ErrorContainer = styled.div`
	${dfc};
	align-items: ${center};
	justify-content: ${center};
	gap: ${s24};
	width: ${wView};
	height: ${hView};
`;

export const ErrorIcon = styled.img``;

export const ErrorMessage = styled.h2`
	max-width: 300px;
	text-align: ${center};
	background: ${redGradient};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: ${transparent};
`;
