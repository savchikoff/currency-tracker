import styled from 'styled-components';

const s16 = ({ theme }) => theme.themeType.sizes.s16;
const s32 = ({ theme }) => theme.themeType.sizes.s32;
const s72 = ({ theme }) => theme.themeType.sizes.s72;
const s152 = ({ theme }) => theme.themeType.sizes.s152;
const greenGradient = ({ theme }) => theme.themeType.colors.greenGradient;
const smallScreen = ({ theme }) => theme.themeType.breakpoints.small;

export const NotFoundContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const NotFoundHeader = styled.h2`
	font-size: ${s152};
	background: ${greenGradient};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	@media (max-width: ${smallScreen}){
		font-size: ${s72};
	}
`;

export const NotFoundText = styled.p`
	font-size: ${s32};
	text-align: center;

	@media (max-width: ${smallScreen}){
		font-size: ${s16};
	}
`;
