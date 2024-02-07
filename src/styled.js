import styled from "styled-components";

const s0 = ({ theme }) => theme.themeType.sizes.s0;
const smallScreen = ({ theme }) => theme.themeType.breakpoints.small;
const mediumScreen = ({ theme }) => theme.themeType.breakpoints.medium;
const largeScreen = ({ theme }) => theme.themeType.breakpoints.large;

const Container = styled.div`
	margin: ${s0} auto;
	padding: 0 121px;

	@media (max-width: ${largeScreen}) {
		padding: 0 96px;
	}

	@media (max-width: ${mediumScreen}) {
		padding: 0 64px;
	}

	@media (max-width: ${smallScreen}) {
		padding: 0 32px;
	}
`;

export default Container;