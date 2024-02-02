import styled from 'styled-components';

const df = ({ theme }) => theme.theme.displayValues.df;
const s0 = ({ theme }) => theme.theme.sizes.s0;
const s20 = ({ theme }) => theme.theme.sizes.s20;
const s32 = ({ theme }) => theme.theme.sizes.s32;
const s80 = ({ theme }) => theme.theme.sizes.s80;
const s96 = ({ theme }) => theme.theme.sizes.s96;
const s112 = ({ theme }) => theme.theme.sizes.s112;
const img40 = ({ theme }) => theme.theme.imageSizes.img40;
const mintGreenColor = ({ theme }) => theme.theme.colors.mintGreen;
const mediumScreen = ({ theme }) => theme.theme.breakpoints.medium;
const largeScreen = ({ theme }) => theme.theme.breakpoints.large;
const center = ({ theme }) => theme.theme.additionalValues.center;
const none = ({ theme }) => theme.theme.additionalValues.none;

export const NavbarContainer = styled.nav`
	${df};
	align-items: ${center};
	justify-content: space-between;
	min-height: ${s112};

	@media (max-width: ${largeScreen}) {
		min-height: ${s96};
	}

	@media (max-width: ${mediumScreen}) {
		min-height: ${s80};
	}
`;

export const NavbarLogo = styled.img`
	height: ${img40};
	user-select: ${none};

	@media (max-width: ${mediumScreen}) {
		height: ${s32};
	}
`;

export const NavbarLinks = styled.ul`
	${df};
	justify-content: space-between;
	flex-wrap: wrap;
	gap: ${s112};
	list-style-type: ${none};
	transition: 0.3s;
	padding: ${s0};

	a {
		font-size: ${s20};
		transition: all 0.3s ease;
		&:hover {
			color: ${mintGreenColor};
		}
	}

	.active {
		color: ${mintGreenColor};
	}

	@media (max-width: ${largeScreen}) {
		gap: ${s32};
	}

	@media (max-width: ${mediumScreen}) {
		display: none;
	}
`;
