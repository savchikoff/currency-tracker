import { getRandomFloat, randomizeData, randomizeDataWithCurrency } from "../src/utils/randomizer";

describe('getRandomFloat', () => {
    it('should generate a random float within the specified range', () => {
        const min = 1;
        const max = 5;
        const result = getRandomFloat(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });
});

describe('randomizeData', () => {
    it('should generate an array of objects with date and y values', () => {
        const selectedDate = new Date('2024-01-01').getTime();
        const days = 5;
        const min = 1;
        const max = 5;
        const result = randomizeData(selectedDate, days, min, max);

        expect(result).toHaveLength(days);
        result.forEach((item) => {
            expect(item).toHaveProperty('x');
            expect(item.x).toBeInstanceOf(Date);
            expect(item).toHaveProperty('y');
            expect(item.y).toBeInstanceOf(Array);
            expect(item.y).toHaveLength(4);
        });
    });
});

describe('randomizeDataWithCurrency', () => {
    it('should generate an array of objects with date and y values for a specific currency', () => {
        const selectedDate = new Date('2024-01-01').getTime();
        const selectedCurrency = 'USD';
        const days = 5;
        const result = randomizeDataWithCurrency(selectedDate, selectedCurrency, days);

        expect(result).toHaveLength(days);
        result.forEach((item) => {
            expect(item).toHaveProperty('x');
            expect(item.x).toBeInstanceOf(Date);
            expect(item).toHaveProperty('y');
            expect(item.y).toBeInstanceOf(Array);
            expect(item.y).toHaveLength(4);
        });
    });

    it('should handle unknown currencies by returning an array of objects where all "y" elements equal to zero', () => {
        const selectedDate = new Date('2024-01-01').getTime();
        const selectedCurrency = 'UnknownCurrency';
        const days = 5;
        const result = randomizeDataWithCurrency(selectedDate, selectedCurrency, days);
        result.forEach((item) => {
            expect(item).toHaveProperty('x');
            expect(item.x).toBeInstanceOf(Date);
            expect(item).toHaveProperty('y');
            expect(item.y).toBeInstanceOf(Array);
            item.y.forEach((el) => {
                expect(el).toBe(0);
            })
        });
    });
});