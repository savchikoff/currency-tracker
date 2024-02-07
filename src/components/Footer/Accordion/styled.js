import styled from 'styled-components';

const s0 = ({ theme }) => theme.theme.sizes.s0;
const s1 = ({ theme }) => theme.theme.sizes.s1;
const s2 = ({ theme }) => theme.theme.sizes.s2;
const s4 = ({ theme }) => theme.theme.sizes.s4;
const s12 = ({ theme }) => theme.theme.sizes.s12;
const s16 = ({ theme }) => theme.theme.sizes.s16;
const s20 = ({ theme }) => theme.theme.sizes.s20;
const s24 = ({ theme }) => theme.theme.sizes.s24;
const fontNormal = ({ theme }) => theme.theme.fontWeights.normal;
const mediumScreen = ({ theme }) => theme.theme.breakpoints.medium;
const gravelColor = ({ theme }) => theme.theme.colors.gravel;
const monsoonColor = ({ theme }) => theme.theme.colors.monsoon;
const mintGreenColor = ({ theme }) => theme.theme.colors.mintGreen;

export const Chevron = styled.div`
	border-style: solid;
	border-width: ${s2} ${s2} ${s0} ${s0};
	height: ${s4};
	width: ${s4};
	transition: all 0.3s ease-in-out;

	transform: ${(p) => p.direction === 'top' && 'rotate(-45deg)'};
	transform: ${(p) => p.direction === 'right' && 'rotate(45deg)'};
	transform: ${(p) => p.direction === 'bottom' && 'rotate(135deg)'};
	transform: ${(p) => p.direction === 'left' && 'rotate(-135deg)'};
`;

export const Container = styled.div`
	border-bottom: ${s1} solid ${gravelColor};
`;

export const Links = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${s24};
	a {
		color: ${monsoonColor};
		font-size: ${s20};
		font-weight: ${fontNormal};
		transition: all 0.3s ease;

		&:hover {
			color: ${mintGreenColor};
		}
	}

	@media (max-width: ${mediumScreen}) {
		gap: ${s12};
		a {
			font-size: ${s16};
		}
	}
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: ${s24};
	padding: ${s16} ${s0};
	font-weight: ${fontNormal};
	cursor: pointer;

	@media (max-width: ${mediumScreen}) {
		font-size: ${s20};
		padding: ${s12} ${s0};
	}
`;

export const ContentWrapper = styled.div`
	max-height: ${(p) => `${p.maxheight}px`};
	transition: max-height 0.3s ease-in-out;
	overflow: hidden;
`;

export const Content = styled.div`
	padding: ${s0} ${s0} ${s16} ;
	line-height: 1.5;
`;
