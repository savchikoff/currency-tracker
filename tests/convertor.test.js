import CURRENCY_DATA from "../src/components/Currencies/mockData";
import convertCurrency from "../src/helpers/convertor";

describe('convertCurrency', () => {
    it('should convert currency correctly for a valid values', () => {
        const value = 100;
        const chosenCurrency = 'USD';
        const targetCurrency = 'EUR';
        const result = convertCurrency(CURRENCY_DATA, value, chosenCurrency, targetCurrency);
        expect(result).toBe("91.939018");
    });

    it('should handle zero value correctly', () => {
        const value = 0;
        const chosenCurrency = 'USD';
        const targetCurrency = 'ARS';

        const result = convertCurrency(CURRENCY_DATA, value, chosenCurrency, targetCurrency);

        expect(result).toBe("0.000000");
    });

    it('should handle different currencies correctly', () => {
        const value = 50;
        const chosenCurrency = 'CAD';
        const targetCurrency = 'AUD';

        const result = convertCurrency(CURRENCY_DATA, value, chosenCurrency, targetCurrency);

        expect(result).toBe("56.443808");
    });

    it('should return "0.000000" for invalid or missing currencies', () => {
        const value = 100;
        const chosenCurrency = 'USD';
        const targetCurrency = 'NONE';

        const result = convertCurrency(CURRENCY_DATA, value, chosenCurrency, targetCurrency);

        expect(result).toBe("0.000000");
    });
});
