import axios from 'axios';
import { readFromCache, writeToCache } from './cache';

const CURRENCY_API_KEY = 'cur_live_cycwWjf73O9cQNMx1Il61BknausXt7lRgE6CmZSb';
const URL = `https://api.currencyapi.com/v3/latest?apikey=${CURRENCY_API_KEY}&currencies=USD%2CARS%2CCAD%2CJPY%2CAUD%2CCNY%2CEUR%2CBTC%2CLTC`;

const getNewData = async (cacheResponse = false, url = URL) => {
	const { data } = await axios.get(url);
	if (cacheResponse) {
		writeToCache(url, data);
	}
	return data;
};

const getCachedData = (url = URL) => readFromCache(url);

export { getNewData, getCachedData };
