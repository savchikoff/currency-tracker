import { useCallback, useEffect, useState } from "react";

import CurrencySection from "./CurrencySection";
import CurrenciesContainer from "./styled";
import CurrencyConvertorModal from "@components/Currencies/CurrencyConvertorModal"

import { QUOTES_DATA, STOCKS_DATA } from "@constants/currencies";
import getCurrencies from "@utils/getCurrencies";
import CURRENCY_DATA from "./mockData";

const Currencies = () => {

    const [isOpen, setOpen] = useState(false);

    const [currencies, setCurrencies] = useState(CURRENCY_DATA);
    console.log(currencies);

    // const getCurrenciesValues = async () => {
    //     const response = await getCurrencies();
    //     setCurrencies(response);
    // }

    // useEffect(() => {
    //     getCurrenciesValues();
    // }, []);

    console.log(currencies);

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
                <CurrencySection header={"Quotes"} cards={QUOTES_DATA} onClick={handleOpenModal} />
            </CurrenciesContainer>
            <CurrencyConvertorModal isOpen={isOpen} close={handleCloseModal} />
        </>
    )
}

export default Currencies;