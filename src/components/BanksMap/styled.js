import styled from 'styled-components';

const textColor = ({ theme }) => theme.theme.themeColors.text;

const CurrentCurrencyLabel = styled.h4`
	color: ${textColor};
`;

export default CurrentCurrencyLabel;
