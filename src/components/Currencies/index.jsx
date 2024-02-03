import { useEffect, useState } from 'react';

import CurrencySection from './CurrencySection';
import CurrenciesContainer from './styled';
import CurrencyConvertorModal from '@components/Currencies/CurrencyConvertorModal';

import { QUOTES_DATA, STOCKS_DATA, BASE_CURRENCY } from '@constants/currencies';
import { getCachedData, getNewData } from '@utils/request';
import { isCacheValid } from '@utils/cache';

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

	const handleConvertorModalOpen = (id, img) => {
		setModalOpen(true);
		setChosenCurrency({ id, img });
		setAmount("");
	};

	const handleConvertorModalClose = () => {
		setModalOpen(false);
	};

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
