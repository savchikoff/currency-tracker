import { useState, useEffect } from "react";

const useLocalStorage = (initialValue, key) => {

    const getValue = () => {
        const storage = localStorage.getItem(key);
        if (storage) {
            return JSON.parse(storage);
        }

        return initialValue;
    }

    const [currencies, setCurrencies] = useState(getValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(currencies));
    }, [currencies]);

    return [currencies, setCurrencies];
}

export default useLocalStorage;