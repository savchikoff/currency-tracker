const formatCurrencies = (currencies, id) => {
    if (currencies?.data?.[id]) {
        const currencyValue = `$${Number(currencies.data[id].value.toFixed(6))}`;
        return currencyValue;
    }
    return 'Not found';
};

export default formatCurrencies;