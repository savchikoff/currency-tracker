import axios from 'axios';
import { getNewData, getCachedData } from '../src/utils/request';
import * as cacheModule from '../src/utils/cache';
import CURRENCY_DATA from "../src/components/Currencies/mockData";

jest.mock('axios');
jest.mock('../src/utils/cache');

const { writeToCache, readFromCache } = cacheModule;

const mockData = CURRENCY_DATA;

const CURRENCY_API_KEY = process.env.REACT_APP_CURRENCY_API_KEY;
const CURRENCY_API_URL = process.env.REACT_APP_CURRENCY_API_URL;
const CURRENCIES = "currencies=USD%2CARS%2CCAD%2CJPY%2CAUD%2CCNY%2CEUR%2CBTC%2CLTC";

const URL = `${CURRENCY_API_URL}?apikey=${CURRENCY_API_KEY}&${CURRENCIES}`;

afterEach(() => {
    jest.clearAllMocks();
});


describe('getNewData', () => {
    it('should fetch new data and cache response when cacheResponse is true', async () => {
        axios.get.mockResolvedValueOnce({ data: mockData });

        const result = await getNewData(true);

        expect(axios.get).toHaveBeenCalledWith(URL);
        expect(writeToCache).toHaveBeenCalledWith(URL, mockData);
        expect(result).toEqual(mockData);
    });

    it('should fetch new data without caching when cacheResponse is false', async () => {
        axios.get.mockResolvedValueOnce({ data: mockData });

        const result = await getNewData(false);

        expect(axios.get).toHaveBeenCalledWith(URL);
        expect(writeToCache).not.toHaveBeenCalled();
        expect(result).toEqual(mockData);
    });
});

describe('getCachedData', () => {
    it('should read data from cache', () => {
        readFromCache.mockReturnValueOnce(mockData);

        const result = getCachedData();

        expect(readFromCache).toHaveBeenCalledWith(URL);
        expect(result).toEqual(mockData);
    });
});