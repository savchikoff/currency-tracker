import MockDate from 'mockdate';

import CURRENCY_DATA from "../components/Currencies/config";
import {
    isCacheValid,
    readFromCache,
    writeToCache
} from './cache';

const mockDate = '2024-01-01T00:00:00Z';
const mockData = { meta: { last_updated_at: '2023-12-01T12:00:00Z' } };

beforeAll(() => {
    MockDate.set(mockDate);
    localStorage.clear();
});

afterAll(() => {
    MockDate.reset();
    localStorage.clear();
});

describe('readFromCache', () => {
    it('should read from localStorage when data exists', () => {
        localStorage.setItem('data', JSON.stringify(mockData));
        const result = readFromCache('data');
        expect(result).toEqual(mockData);
    });
    it('should return default data when localStorage is empty', () => {
        const result = readFromCache('someKey');
        expect(result).toEqual(CURRENCY_DATA);
    });
});

describe('writeToCache', () => {
    it('should write data to localStorage', () => {
        writeToCache('data', mockData);
        expect(localStorage.getItem('data')).toEqual(JSON.stringify(mockData));
    });
});

describe('isCacheValid', () => {
    it('should return true when cache is not valid', () => {
        const result = isCacheValid(mockData);
        expect(result).toBe(false);
    });

    it('should return false when cache is valid', () => {
        const actualData = { meta: { last_updated_at: '2024-01-01T12:00:00Z' } };
        const result = isCacheValid(actualData);
        expect(result).toBe(true);
    });
});