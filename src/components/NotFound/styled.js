import styled from 'styled-components';

const dfc = ({ theme }) => theme.theme.displayValues.dfc;
const s16 = ({ theme }) => theme.theme.sizes.s16;
const s32 = ({ theme }) => theme.theme.sizes.s32;
const s72 = ({ theme }) => theme.theme.sizes.s72;
const s152 = ({ theme }) => theme.theme.sizes.s152;
const center = ({ theme }) => theme.theme.additionalValues.center;
const greenGradient = ({ theme }) => theme.theme.colors.greenGradient;
const transparent = ({ theme }) => theme.theme.additionalValues.transparent;
const smallScreen = ({ theme }) => theme.theme.breakpoints.small;

export const NotFoundContainer = styled.div`
	${dfc};
	justify-content: ${center};
	align-items: ${center};
`;

export const NotFoundHeader = styled.h2`
	font-size: ${s152};
	background: ${greenGradient};
	-webkit-background-clip: text;
	-webkit-text-fill-color: ${transparent};

	@media (max-width: ${smallScreen}){
		font-size: ${s72};
	}
`;

export const NotFoundText = styled.p`
	font-size: ${s32};
	text-align: ${center};

	@media (max-width: ${smallScreen}){
		font-size: ${s16};
	}
`;
