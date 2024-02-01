import styled from 'styled-components';

const dfc = ({ theme }) => theme.theme.displayValues.dfc;
const dg = ({ theme }) => theme.theme.displayValues.dg;
const s2 = ({ theme }) => theme.theme.sizes.s2;
const s12 = ({ theme }) => theme.theme.sizes.s12;
const s16 = ({ theme }) => theme.theme.sizes.s16;
const s20 = ({ theme }) => theme.theme.sizes.s20;
const s24 = ({ theme }) => theme.theme.sizes.s24;
const s32 = ({ theme }) => theme.theme.sizes.s32;
const s48 = ({ theme }) => theme.theme.sizes.s48;
const s56 = ({ theme }) => theme.theme.sizes.s56;
const smallScreen = ({ theme }) => theme.theme.breakpoints.small;
const largeScreen = ({ theme }) => theme.theme.breakpoints.large;
const gravelColor = ({ theme }) => theme.theme.colors.gravel;
const fontLight = ({ theme }) => theme.theme.fontWeights.light;
const themeTextColor = ({ theme }) => theme.theme.themeColors.text;

export const CurrencySectionContainer = styled.div`
	${dfc};
`;

export const CurrencySectionHeader = styled.span`
	font-size: ${s32};
	color: ${themeTextColor};
	font-weight: ${fontLight};
	border-bottom: ${s2} solid ${gravelColor};
	padding-bottom: ${s24};
	margin-bottom: ${s48};
	max-width: 520px;

	@media (max-width: ${largeScreen}) {
		font-size: ${s24};
		padding-bottom: ${s16};
		margin-bottom: ${s32};
	}

	@media (max-width: ${smallScreen}) {
		font-size: ${s20};
		padding-bottom: ${s12};
		margin-bottom: ${s20};
	}
`;

export const CurrencySectionCards = styled.div`
	${dg};
	grid-template-columns: repeat(2, 1fr);
	column-gap: 184px;
	row-gap: ${s56};

	@media (max-width: ${largeScreen}) {
		${dfc};
		gap: ${s16};
	}
`;
