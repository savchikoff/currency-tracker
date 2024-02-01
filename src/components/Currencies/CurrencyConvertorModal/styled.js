import styled from 'styled-components';

export const AmountInput = styled.input`
	font-family: inherit;
	font-weight: 300;
	font-size: 20px;
	border: none;
	border-bottom: 2px solid #474747;
	outline: 0;
	color: #ffffff;
	padding: 8px 0;
	background: transparent;
	transition: border-color 0.2s;

	&:focus {
		border-image: linear-gradient(
			90deg,
			#00ce2c 0.18%,
			#aedf23 49.3%,
			#a3dc00 99.88%
		);
		border-image-slice: 1;
	}

	@media (max-width: 500px) {
		font-size: 16px;
	}
`;

export const CurrenciesContainer = styled.div`
	display: flex;
	gap: 20px;
`;

export const Label = styled.label`
	font-weight: 300px;

	@media (max-width: 500px) {
		font-size: 12px;
	}
`;

export const CurrentCurrency = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const ConvertibleCurrency = styled(CurrentCurrency)``;

export const CurrencyContainer = styled.div`
	padding: 8px;
	border: 1px solid #474747;
	border-radius: 8px;
`;

export const CurrencyWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const CurrencyImage = styled.img`
	width: 30px;
	height: 30px;

	@media (max-width: 500px) {
		width: 20px;
		height: 20px;
	}
`;
export const CurrencyName = styled.span``;

export const ConvertedAmount = styled.span`
	font-weight: 600;

	@media (max-width: 500px) {
		font-size: 12px;
	}
`;
