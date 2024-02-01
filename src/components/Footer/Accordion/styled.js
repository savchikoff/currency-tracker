import styled from 'styled-components';

export const Chevron = styled.div`
	border-style: solid;
	border-width: 2px 2px 0 0;
	height: 4px;
	width: 4px;
	transition: all 0.3s ease-in-out;

	transform: ${(p) => p.direction === 'top' && 'rotate(-45deg)'};
	transform: ${(p) => p.direction === 'right' && 'rotate(45deg)'};
	transform: ${(p) => p.direction === 'bottom' && 'rotate(135deg)'};
	transform: ${(p) => p.direction === 'left' && 'rotate(-135deg)'};
`;

export const Container = styled.div`
	border-bottom: 1px solid #607d94;
`;

export const Links = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	a {
		color: #898989;
		font-size: 20px;
		font-weight: 400;
		line-height: normal;
		transition: all 0.3s ease;

		&:hover {
			color: #00bc4f;
		}
	}

	@media (max-width: 768px) {
		gap: 12px;
		a {
			font-size: 16px;
		}
	}
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 24px;
	padding: 16px 0;
	font-weight: 400;
	cursor: pointer;

	@media (max-width: 768px) {
		font-size: 20px;
		padding: 12px 0;
	}
`;

export const ContentWrapper = styled.div`
	max-height: ${(p) => `${p.maxHeight}px`};
	transition: max-height 0.3s ease-in-out;
	overflow: hidden;
`;

export const Content = styled.div`
	padding: 0 0 16px;
	line-height: 1.5;
`;
