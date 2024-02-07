import styled from 'styled-components';

const s0 = ({ theme }) => theme.theme.sizes.s0;
const s1 = ({ theme }) => theme.theme.sizes.s1;
const s8 = ({ theme }) => theme.theme.sizes.s8;
const fontLight = ({ theme }) => theme.theme.fontWeights.light;
const gravelColor = ({ theme }) => theme.theme.colors.gravel;
const dropDownBg = ({ theme }) => theme.theme.themeColors.modalBg;
const smallScreen = ({ theme }) => theme.theme.breakpoints.small;

export const Main = styled.div`
	font-family: inherit;
`;

export const DropDownContainer = styled.div``;

export const DropDownHeader = styled.div`
	display: flex;
	gap: ${s8};
	align-items: center;
	padding: ${s8};
	font-weight: ${fontLight};
	background: ${dropDownBg};
	border: ${s1} solid ${gravelColor};
	border-radius: ${s8};
	position: relative;
	z-index: 2;
`;

export const CurrencyImage = styled.img`
	width: 30px;
	height: 30px;

	@media (max-width: ${smallScreen}) {
		width: 20px;
		height: 20px;
	}
`;
export const CurrencyName = styled.span``;

export const DropDownListContainer = styled.div`
	position: absolute;
	z-index: 1;
	margin-top: ${s8};
`;

export const DropDownList = styled.ul`
	padding: ${s0};
	background: ${dropDownBg};
	max-height: 200px;
	overflow-y: auto;
	scrollbar-width: thin;
	scrollbar-color: transparent transparent;
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
	display: flex;
	align-items: center;
	gap: ${s8};
	list-style: none;
	padding: ${s8};
	&:not(:last-child) {
		border-bottom: ${s1} solid ${gravelColor};
	}
`;
