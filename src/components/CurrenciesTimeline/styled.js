import styled from 'styled-components';

const s16 = ({ theme }) => theme.themeType.sizes.s16;
const s32 = ({ theme }) => theme.themeType.sizes.s32;
const s48 = ({ theme }) => theme.themeType.sizes.s48;
const s56 = ({ theme }) => theme.themeType.sizes.s56;
const smallScreen = ({ theme }) => theme.themeType.breakpoints.small;
const largeScreen = ({ theme }) => theme.themeType.breakpoints.large;

export const TimelineContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${s48};

	@media (max-width: ${largeScreen}) {
		gap: ${s32};
	}

	@media (max-width: ${smallScreen}) {
		gap: ${s16};
	}
`;

export const UpdateWrapper = styled.div`
	display: flex;
	align-items: center;
	min-height: ${s56};
	gap: ${s32};
`;
