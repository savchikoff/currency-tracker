import { useCallback, useEffect, useState } from "react";

import CurrencySection from "./CurrencySection";
import CurrenciesContainer from "./styled";
import CurrencyConvertorModal from "@components/Currencies/CurrencyConvertorModal";

import { QUOTES_DATA, STOCKS_DATA } from "@constants/currencies";
import { getNewData, getCachedData } from '@utils/request';
import { isCacheValid } from '@utils/cache';
import CURRENCY_DATA from "./mockData";

const Currencies = () => {

    const [isOpen, setOpen] = useState(false);

    const [currencies, setCurrencies] = useState(CURRENCY_DATA);

    const useCache = true;

    const getCurrencies = async () => {
        if (isCacheValid(currencies)) {
            const cachedCurrencies = getCachedData();
            if (cachedCurrencies) {
                setCurrencies(cachedCurrencies);
            }
        } else {
            const freshCurrencies = await getNewData(useCache);
            setCurrencies(freshCurrencies);
        }
    }

    useEffect(() => {
        getCurrencies();
    }, [])

    const handleOpenModal = () => {
        setOpen(true);
    }

    const handleCloseModal = () => {
        setOpen(false);
    }


    return (
        <>
            <CurrenciesContainer>
                <CurrencySection header={"Stocks"} cards={STOCKS_DATA} />
                <CurrencySection header={"Quotes"} cards={QUOTES_DATA} currencies={currencies} onClick={handleOpenModal} />
            </CurrenciesContainer>
            <CurrencyConvertorModal isOpen={isOpen} close={handleCloseModal} />
        </>
    )
}

export default Currencies;