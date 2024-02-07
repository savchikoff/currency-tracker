import styled from 'styled-components';

const s48 = ({ theme }) => theme.theme.sizes.s48;
const s88 = ({ theme }) => theme.theme.sizes.s88;
const largeScreen = ({ theme }) => theme.theme.breakpoints.large;

const CurrenciesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${s88};

	@media (max-width: ${largeScreen}) {
		gap: ${s48};
	}
`;

export default CurrenciesContainer;
