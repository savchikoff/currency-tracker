const convertCurrency = (currencies, value, chosenCurrency, targetCurrency) => {
    const currenciesRatio = currencies.data[targetCurrency].value / currencies.data[chosenCurrency].value;
    return (Number(value) * currenciesRatio).toFixed(6);
}

export default convertCurrency;