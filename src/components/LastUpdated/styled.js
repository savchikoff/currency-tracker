import styled from 'styled-components';

const df = ({ theme }) => theme.theme.displayValues.df;
const dib = ({ theme }) => theme.theme.displayValues.dib;
const s0 = ({ theme }) => theme.theme.sizes.s0;
const s2 = ({ theme }) => theme.theme.sizes.s2;
const s4 = ({ theme }) => theme.theme.sizes.s4;
const s8 = ({ theme }) => theme.theme.sizes.s8;
const s16 = ({ theme }) => theme.theme.sizes.s16;
const s24 = ({ theme }) => theme.theme.sizes.s24;
const s32 = ({ theme }) => theme.theme.sizes.s32;
const s48 = ({ theme }) => theme.theme.sizes.s48;
const s64 = ({ theme }) => theme.theme.sizes.s64;
const img24 = ({ theme }) => theme.theme.imageSizes.img24;
const img40 = ({ theme }) => theme.theme.imageSizes.img40;
const posR = ({ theme }) => theme.theme.positions.posR;
const posA = ({ theme }) => theme.theme.positions.posA;
const mintGreenColor = ({ theme }) => theme.theme.colors.mintGreen;
const center = ({ theme }) => theme.theme.additionalValues.center;
const largeScreen = ({ theme }) => theme.theme.breakpoints.large;
const mediumScreen = ({ theme }) => theme.theme.breakpoints.medium;
const smallScreen = ({ theme }) => theme.theme.breakpoints.small;

export const LastUpdatedContainer = styled.div`
	${df};
	align-items: ${center};
	justify-content: ${center};
	padding: ${s64} ${s0};
	gap: ${s24};

	@media (max-width: ${largeScreen}) {
		padding: ${s48} ${s0};
	}

	@media (max-width: ${mediumScreen}) {
		padding: ${s32} ${s0};
	}

	@media (max-width: ${smallScreen}) {
		gap: ${s8};
	}
`;

export const BlinkingDot = styled.span`
	${dib};
	width: ${img40};
	height: ${img40};
	${posR};

	&::after,
	&::before {
		content: '';
		box-sizing: border-box;
		width: ${img40};
		height: ${img40};
		border-radius: 50%;
		border: ${s4} solid ${mintGreenColor};
		${posA};
		left: ${s0};
		top: ${s0};
		animation: scaling 2s linear infinite;
	}

	&::after {
		animation-delay: 1s;
	}

	@keyframes scaling {
		0% {
			transform: scale(0);
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: ${s0};
		}
	}

	@media (max-width: ${smallScreen}) {
		width: ${img24};
		height: ${img24};
		&::after,
		&::before {
			width: ${img24};
			height: ${img24};
			border: ${s2} solid ${mintGreenColor};
		}
	}
`;

export const LastUpdatedInfo = styled.span`
	font-size: ${s32};

	@media (max-width: ${largeScreen}) {
		font-size: ${s24};
	}

	@media (max-width: ${smallScreen}) {
		font-size: ${s16};
	}
`;
