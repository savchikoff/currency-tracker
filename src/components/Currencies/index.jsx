import { useEffect, useState, useCallback } from 'react';

import CurrencySection from './CurrencySection';
import CurrenciesContainer from './styled';
import CurrencyConvertorModal from '@components/Currencies/CurrencyConvertorModal';

import { QUOTES_DATA, STOCKS_DATA, BASE_CURRENCY } from '@constants/currencies';
import { getCachedData, getNewData } from '@api/request';
import { isCacheValid } from '@helpers/cache';

const Currencies = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	const [currencies, setCurrencies] = useState(getCachedData);
	const [amount, setAmount] = useState("");
	const [chosenCurrency, setChosenCurrency] = useState(BASE_CURRENCY);

	const getCurrenciesRates = async () => {
		if (isCacheValid(currencies)) {
			const cachedCurrencies = getCachedData();
			if (cachedCurrencies) {
				setCurrencies(cachedCurrencies);
			}
		} else {
			const freshCurrencies = await getNewData(true);
			setCurrencies(freshCurrencies);
		}
	};

	useEffect(() => {
		getCurrenciesRates();
	}, []);

	const handleConvertorModalOpen = useCallback((id, img) => {
		setModalOpen(prevState => !prevState);
		setChosenCurrency({ id, img });
		setAmount("");
	}, []);

	const handleConvertorModalClose = useCallback(() => {
		setModalOpen(prevState => !prevState);
	}, []);

	return (
		<>
			<CurrenciesContainer>
				<CurrencySection
					header={'Stocks'}
					cards={STOCKS_DATA}
					isClickable={false}
				/>
				<CurrencySection
					header={'Quotes'}
					cards={QUOTES_DATA}
					currencies={currencies}
					isClickable={true}
					handleConvertorModalOpen={handleConvertorModalOpen}
				/>
			</CurrenciesContainer>
			<CurrencyConvertorModal
				isOpen={isModalOpen}
				close={handleConvertorModalClose}
				chosenCurrency={chosenCurrency}
				amount={amount}
				setAmount={setAmount}
				currencies={currencies}
			/>
		</>
	);
};

export default Currencies;
