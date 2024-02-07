import styled from 'styled-components';

const s0 = ({ theme }) => theme.themeType.sizes.s0;
const s20 = ({ theme }) => theme.themeType.sizes.s20;
const s32 = ({ theme }) => theme.themeType.sizes.s32;
const s80 = ({ theme }) => theme.themeType.sizes.s80;
const s96 = ({ theme }) => theme.themeType.sizes.s96;
const s112 = ({ theme }) => theme.themeType.sizes.s112;
const mintGreenColor = ({ theme }) => theme.themeType.colors.mintGreen;
const mediumScreen = ({ theme }) => theme.themeType.breakpoints.medium;
const largeScreen = ({ theme }) => theme.themeType.breakpoints.large;

export const NavbarContainer = styled.nav`
	display: flex;
	align-items: center;
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
	height: 40px;
	user-select: none;

	@media (max-width: ${mediumScreen}) {
		height: ${s32};
	}
`;

export const NavbarLinks = styled.ul`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: ${s112};
	list-style-type: none;
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
