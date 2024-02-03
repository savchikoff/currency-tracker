import { formatDate, formatCurrencies, formatTime } from "../src/utils/formatting";
import CURRENCY_DATA from "../src/components/Currencies/mockData";

describe('formatTime', () => {
    it('should format a single-digit hour correctly', () => {
        const result = formatTime(5);
        expect(result).toBe('05');
    });

    it('should format a double-digit hour correctly', () => {
        const result = formatTime(15);
        expect(result).toBe('15');
    });
});

describe('formatDate', () => {
    it('should format a date correctly', () => {
        const date = '2022-01-15T12:30:00Z';
        const result = formatDate(date);
        expect(result).toBe('15 January 15:30');
    });

    it('should format a date with single-digit day and hour correctly', () => {
        const date = '2022-02-05T08:05:00Z';
        const result = formatDate(date);
        expect(result).toBe('05 February 11:05');
    });
});

describe('formatCurrencies', () => {
    it('should format a currency correctly', () => {
        const id = 'ARS';
        const result = formatCurrencies(CURRENCY_DATA, id);
        expect(result).toBe('$821.338707');
    });

    it('should handle missing or invalid currencies', () => {
        const id = 'InvalidCurrency';
        const result = formatCurrencies(CURRENCY_DATA, id);
        expect(result).toBe('Not found');
    });
});
