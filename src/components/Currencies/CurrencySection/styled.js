import styled from 'styled-components';

const s2 = ({ theme }) => theme.themeType.sizes.s2;
const s12 = ({ theme }) => theme.themeType.sizes.s12;
const s16 = ({ theme }) => theme.themeType.sizes.s16;
const s20 = ({ theme }) => theme.themeType.sizes.s20;
const s24 = ({ theme }) => theme.themeType.sizes.s24;
const s32 = ({ theme }) => theme.themeType.sizes.s32;
const s48 = ({ theme }) => theme.themeType.sizes.s48;
const s56 = ({ theme }) => theme.themeType.sizes.s56;
const smallScreen = ({ theme }) => theme.themeType.breakpoints.small;
const largeScreen = ({ theme }) => theme.themeType.breakpoints.large;
const gravelColor = ({ theme }) => theme.themeType.colors.gravel;
const fontLight = ({ theme }) => theme.themeType.fontWeights.light;
const themeTextColor = ({ theme }) => theme.themeType.themeColors.text;

export const CurrencySectionContainer = styled.div`
	display: flex;
	flex-direction: column;
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
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 184px;
	row-gap: ${s56};

	@media (max-width: ${largeScreen}) {
		display: flex;
		flex-direction: column;
		gap: ${s16};
	}
`;
