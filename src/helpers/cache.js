import CURRENCY_DATA from '../components/Currencies/config';
import CACHE_LIFETIIME from '../constants/cache';

const readFromCache = (key) => {
    const storage = localStorage.getItem(key);
    if (storage) {
        return JSON.parse(storage);
    }
    return CURRENCY_DATA;
};

const writeToCache = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const isCacheValid = (data) => {
    const cacheDate = Date.parse(data.meta.last_updated_at);
    const now = new Date();
    const isValid = now - cacheDate >= CACHE_LIFETIIME;
    return !isValid;
};

export { isCacheValid, readFromCache, writeToCache };
