import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
	AmountInput,
	Label,
	CurrencyContainer,
	CurrencyWrapper,
	CurrencyImage,
	CurrencyName,
	CurrentCurrency,
	ConvertibleCurrency,
	CurrenciesContainer,
	ConvertedAmount,
} from './styled';
import Button from '@components/Button';

import Modal from '@components/Modal';

import { BASE_CURRENCY } from '@constants/currencies';
import convertCurrency from '@utils/convertor';
import Select from './Select';

const PLACEHOLDER = 'Enter the amount';

const CurrencyConvertorModal = ({
	isOpen,
	close,
	chosenCurrency,
	amount,
	setAmount,
	currencies,
}) => {
	const { id: chosenCurrencyName, img } = chosenCurrency;

	const [convertedAmount, setConvertedAmount] = useState(0);
	const [targetCurrency, setTargetCurrency] = useState(BASE_CURRENCY);

	useEffect(() => {
		setConvertedAmount(0);
	}, [chosenCurrency]);

	const handleChangeAmount = (e) => {
		setAmount(e.target.value);
	};

	const handleConvert = () => {
		if (Number(amount) > 0) {
			const convertedValue = convertCurrency(
				currencies,
				Number(amount),
				chosenCurrencyName,
				targetCurrency.id
			);
			setConvertedAmount(Number(convertedValue));
		}
	};

	return (
		<Modal isOpen={isOpen} close={close} dataCy="convertor-modal">
			<AmountInput
				value={amount}
				onChange={handleChangeAmount}
				placeholder={PLACEHOLDER}
				data-cy="modal-convertor-input"
			/>
			<CurrenciesContainer>
				<CurrentCurrency>
					<Label>From</Label>
					<CurrencyContainer>
						<CurrencyWrapper>
							<CurrencyImage src={img} />
							<CurrencyName>{chosenCurrencyName}</CurrencyName>
						</CurrencyWrapper>
					</CurrencyContainer>
				</CurrentCurrency>
				<ConvertibleCurrency>
					<Label>To</Label>
					<Select
						targetCurrency={targetCurrency}
						chosenCurrency={chosenCurrency}
						setTargetCurrency={setTargetCurrency}
						setConvertedAmount={setConvertedAmount}
					/>
				</ConvertibleCurrency>
			</CurrenciesContainer>
			<ConvertedAmount data-cy="converted-amount">
				Converted amount: {convertedAmount} {targetCurrency.id}
			</ConvertedAmount>
			<Button dataCy="convertor-btn" onClick={handleConvert}>Convert</Button>
		</Modal>
	);
};

CurrencyConvertorModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
	chosenCurrency: PropTypes.object.isRequired,
	amount: PropTypes.string.isRequired,
	setAmount: PropTypes.func.isRequired,
	currencies: PropTypes.object.isRequired,
};

export default CurrencyConvertorModal;
