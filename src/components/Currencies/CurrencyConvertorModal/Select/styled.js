import styled from 'styled-components';

const df = ({ theme }) => theme.theme.displayValues.df;
const s0 = ({ theme }) => theme.theme.sizes.s0;
const s1 = ({ theme }) => theme.theme.sizes.s1;
const s8 = ({ theme }) => theme.theme.sizes.s8;
const img30 = ({ theme }) => theme.theme.imageSizes.img30;
const img20 = ({ theme }) => theme.theme.imageSizes.img20;
const fontLight = ({ theme }) => theme.theme.fontWeights.light;
const gravelColor = ({ theme }) => theme.theme.colors.gravel;
const dropDownBg = ({ theme }) => theme.theme.themeColors.modalBg;
const posR = ({ theme }) => theme.theme.positions.posR;
const posA = ({ theme }) => theme.theme.positions.posA;
const smallScreen = ({ theme }) => theme.theme.breakpoints.small;
const inherit = ({ theme }) => theme.theme.additionalValues.inherit;
const center = ({ theme }) => theme.theme.additionalValues.center;
const transparent = ({ theme }) => theme.theme.additionalValues.transparent;
const none = ({ theme }) => theme.theme.additionalValues.none;

export const Main = styled.div`
	font-family: ${inherit};
`;

export const DropDownContainer = styled.div``;

export const DropDownHeader = styled.div`
	${df};
	gap: ${s8};
	align-items: ${center};
	padding: ${s8};
	font-weight: ${fontLight};
	background: ${dropDownBg};
	border: ${s1} solid ${gravelColor};
	border-radius: ${s8};
	${posR};
	z-index: 2;
`;

export const CurrencyImage = styled.img`
	width: ${img30};
	height: ${img30};

	@media (max-width: ${smallScreen}) {
		width: ${img20};
		height: ${img20};
	}
`;
export const CurrencyName = styled.span``;

export const DropDownListContainer = styled.div`
	${posA};
	z-index: 1;
	margin-top: ${s8};
`;

export const DropDownList = styled.ul`
	padding: ${s0};
	background: ${dropDownBg};
	max-height: 200px;
	overflow-y: auto;
	scrollbar-width: thin;
	scrollbar-color: ${transparent} ${transparent};
	&::-webkit-scrollbar {
		width: ${s0};
	}
	&::-webkit-scrollbar-thumb {
		background-color: transparent;
	}
	border: ${s1} solid ${gravelColor};
	box-sizing: border-box;
	border-radius: ${s8};
	font-weight: ${fontLight};
	&:not(:last-child) {
		border-bottom: ${s1} solid ${gravelColor};
	}
`;

export const ListItem = styled.li`
	${df};
	align-items: ${center};
	gap: ${s8};
	list-style: ${none};
	padding: ${s8};
	&:not(:last-child) {
		border-bottom: ${s1} solid ${gravelColor};
	}
`;
