import styled from 'styled-components';

export const TimelineContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 48px;

	@media (max-width: 768px) {
		gap: 32px;
	}

	@media (max-width: 500px) {
		gap: 16px;
	}
`;

export const UpdateWrapper = styled.div`
	display: flex;
	align-items: center;
	min-height: 56px;
	gap: 32px;
`;
