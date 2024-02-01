import styled from 'styled-components';

export const NotificationWrapper = styled.div`
	background: #202025;
	padding: 16px;
	min-width: 250px;
	border-radius: 8px;
	position: fixed;
	top: 32px;
	right: 24px;
	border: 1px solid #474747;

	@media (max-width: 768px) {
		padding: 8px;
		top: 20px;
		right: 16px;
	}
`;

export const NotificationTitle = styled.h3`
	margin: 0;

	@media (max-width: 500px) {
		font-size: 12px;
	}
`;

export const NotificationContent = styled.p`
	margin: 0;
	font-size: 16px;

	@media (max-width: 500px) {
		font-size: 12px;
	}
`;
