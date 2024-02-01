import styled from 'styled-components';

export const ModalContainer = styled.div``;

export const ModalWrapper = styled.div`
	display: flex;
	gap: 16px;
	flex-direction: column;
	align-items: center;

	@media (max-width: 500px) {
		gap: 8px;
	}
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const InputLabel = styled.label`
	@media (max-width: 500px) {
		font-size: 12px;
	}
`;

export const ErrorLabel = styled.div`
	text-align: center;
	color: #ef403c;
	text-wrap: balance;
	@media (max-width: 500px) {
		font-size: 12px;
	}
`;

export const TextInput = styled.input`
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

export const SelectInput = styled.select`
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

export const Option = styled.option`
	color: #030304;
`;
