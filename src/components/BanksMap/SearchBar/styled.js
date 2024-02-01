import styled from 'styled-components';

const dfc = ({ theme }) => theme.theme.displayValues.dfc;
const w250 = ({ theme }) => theme.theme.width.w250;
const wFull = ({ theme }) => theme.theme.width.wFull;
const s0 = ({ theme }) => theme.theme.sizes.s0;
const s1 = ({ theme }) => theme.theme.sizes.s1;
const s2 = ({ theme }) => theme.theme.sizes.s2;
const s8 = ({ theme }) => theme.theme.sizes.s8;
const s12 = ({ theme }) => theme.theme.sizes.s12;
const s16 = ({ theme }) => theme.theme.sizes.s16;
const s20 = ({ theme }) => theme.theme.sizes.s20;
const s32 = ({ theme }) => theme.theme.sizes.s32;
const s48 = ({ theme }) => theme.theme.sizes.s48;
const themeTextColor = ({ theme }) => theme.theme.themeColors.text;
const themeBgColor = ({ theme }) => theme.theme.themeColors.background;
const posA = ({ theme }) => theme.theme.positions.posA;
const posR = ({ theme }) => theme.theme.positions.posR;
const smallScreen = ({ theme }) => theme.theme.breakpoints.small;
const greenGradient = ({ theme }) => theme.theme.colors.greenGradient;
const gravelColor = ({ theme }) => theme.theme.colors.gravel;
const transparent = ({ theme }) => theme.theme.additionalValues.transparent;
const none = ({ theme }) => theme.theme.additionalValues.none;
const inherit = ({ theme }) => theme.theme.additionalValues.inherit;
const center = ({ theme }) => theme.theme.additionalValues.center;

export const SearchContainer = styled.div`
	${dfc};
	align-items: ${center};
	margin-bottom: ${s48};
`;

export const SearchWrapper = styled.div`
	width: ${w250};
`;

export const SearchInput = styled.input`
	font-family: ${inherit};
	font-size: ${s20};
	width: ${wFull};
	border: ${none};
	border-bottom: ${s2} solid ${gravelColor};
	outline: ${s0};
	color: ${themeTextColor};
	padding: ${s8} ${s0};
	background: ${transparent};
	transition: border-color 0.2s;
	${posR};
	z-index: 2;

	&:focus {
		border-image: ${greenGradient};
		border-image-slice: 1;
	}

	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
	}
`;

export const ResultListContainer = styled.div`
	${posA};
	z-index: 1;
	width: ${w250};
`;

export const ResultList = styled.ul`
	${dfc};
	justify-content: ${center};
	width: ${wFull};
	list-style: ${none};
	padding: ${s0};
	margin: ${s0};
`;

export const ResultItem = styled.li`
	font-size: ${s16};
	padding: ${s16} ${s32};
	border: ${s1} solid ${gravelColor};
	color: ${themeTextColor};
	background-color: ${themeBgColor};

	@media (max-width: ${smallScreen}) {
		font-size: ${s12};
		padding: ${s8} ${s16};
	}
`;
