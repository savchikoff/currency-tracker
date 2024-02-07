import axios from 'axios';

import { readFromCache, writeToCache } from './cache';

const CURRENCY_API_KEY = process.env.REACT_APP_CURRENCY_API_KEY;
const CURRENCY_API_URL = process.env.REACT_APP_CURRENCY_API_URL;
const CURRENCIES = "currencies=USD%2CARS%2CCAD%2CJPY%2CAUD%2CCNY%2CEUR%2CBTC%2CLTC";

const URL = `${CURRENCY_API_URL}?apikey=${CURRENCY_API_KEY}&${CURRENCIES}`;

const getNewData = async (cacheResponse = false, url = URL) => {
	const { data } = await axios.get(url);
	if (cacheResponse) {
		writeToCache(url, data);
	}
	return data;
};

const getCachedData = (url = URL) => readFromCache(url);

export { getCachedData,getNewData };
