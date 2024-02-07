import styled from 'styled-components';

const smallScreen = ({ theme }) => theme.themeType.breakpoints.small;

const MapContainer = styled.div`
	height: 400px;

	@media (max-width: ${smallScreen}) {
		height: 300px;
	}
`;

export default MapContainer;
