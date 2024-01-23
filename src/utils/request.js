import axios from "axios";
import { readFromCache, writeToCache } from "./cache";

const URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_cycwWjf73O9cQNMx1Il61BknausXt7lRgE6CmZSb&currencies=USD%2CARS%2CCAD%2CJPY%2CAUD%2CCNY%2CEUR%2CBTC%2CLTC";

const getNewData = async (cacheResponse = false) => {
    const { data } = await axios.get(URL);
    if (cacheResponse) {
        writeToCache(URL, data);
    }
    return data;
};

const getCachedData = () => readFromCache(URL);

export { getNewData, getCachedData }