const convertCurrency = (currencies, value, chosenCurrency, targetCurrency) => {
	const targetCurrencyValue = currencies.data[targetCurrency]?.value;
	const chosenCurrencyValue = currencies.data[chosenCurrency]?.value;
	if (!targetCurrencyValue || !chosenCurrencyValue) {
		return "0.000000";
	}
	const currenciesRatio =
		targetCurrencyValue /
		chosenCurrencyValue;
	return (Number(value) * currenciesRatio).toFixed(6);
};

export default convertCurrency;
