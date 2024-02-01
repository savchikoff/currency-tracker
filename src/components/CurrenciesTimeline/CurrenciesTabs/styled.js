import styled from 'styled-components';

export const Tab = styled.button`
	font-family: inherit;
	padding: 8px 32px;
	cursor: pointer;
	opacity: 0.6;
	color: #ffffff;
	background: #202025;
	border: 0;
	border-bottom: 2px solid transparent;
	border-radius: 8px;
	outline: 0;
	${({ active }) =>
		active &&
		`
    border-bottom: 2px solid #474747;
    opacity: 1;
  `}
`;

export const TabContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
`;

export const CurrencyName = styled.span`
	font-size: 16px;

	@media (max-width: 500px) {
		font-size: 12px;
	}
`;

export const CurrencyImg = styled.img`
	width: 30px;
	height: 30px;
	@media (max-width: 768px) {
		width: 24px;
		height: 24px;
	}
`;

export const ButtonGroup = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 8px;
	flex-wrap: wrap;

	@media (max-width: 500px) {
		gap: 4px;
		grid-template-columns: repeat(2, 1fr);
	}
`;
