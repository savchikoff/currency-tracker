import styled from 'styled-components';

const s0 = ({ theme }) => theme.themeType.sizes.s0;
const s2 = ({ theme }) => theme.themeType.sizes.s2;
const s4 = ({ theme }) => theme.themeType.sizes.s4;
const s8 = ({ theme }) => theme.themeType.sizes.s8;
const s16 = ({ theme }) => theme.themeType.sizes.s16;
const s24 = ({ theme }) => theme.themeType.sizes.s24;
const s32 = ({ theme }) => theme.themeType.sizes.s32;
const s48 = ({ theme }) => theme.themeType.sizes.s48;
const s64 = ({ theme }) => theme.themeType.sizes.s64;
const mintGreenColor = ({ theme }) => theme.themeType.colors.mintGreen;
const largeScreen = ({ theme }) => theme.themeType.breakpoints.large;
const mediumScreen = ({ theme }) => theme.themeType.breakpoints.medium;
const smallScreen = ({ theme }) => theme.themeType.breakpoints.small;

export const LastUpdatedContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
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
	display: inline-block;
	width: 40px;
	height: 40px;
	position: relative;

	&::after,
	&::before {
		content: '';
		box-sizing: border-box;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: ${s4} solid ${mintGreenColor};
		position: absolute;
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
		width: 24px;
		height: 24px;
		&::after,
		&::before {
			width: 24px;
			height: 24px;
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
