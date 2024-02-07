import styled from 'styled-components';

const s16 = ({ theme }) => theme.theme.sizes.s16;
const s32 = ({ theme }) => theme.theme.sizes.s32;
const s48 = ({ theme }) => theme.theme.sizes.s48;
const s56 = ({ theme }) => theme.theme.sizes.s56;
const smallScreen = ({ theme }) => theme.theme.breakpoints.small;
const largeScreen = ({ theme }) => theme.theme.breakpoints.large;

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
