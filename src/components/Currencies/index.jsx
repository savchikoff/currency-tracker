import axios from "axios";
import { useEffect, useState } from "react";

import CurrencySection from "./CurrencySection";
import CurrenciesContainer from "./styled";


import { QUOTES_DATA, STOCKS_DATA } from "@constants/currencies";
import getCurrencies from "@utils/getCurrencies";
import useLocalStorage from "../../hooks/useLocalStorage";

const Currencies = () => {

    const [currencies, setCurrencies] = useState({ data: {} });
    const [exchangeAmount, setExchangeAmount] = useState("");



    console.log(currencies);

    return (
        <CurrenciesContainer>
            <CurrencySection header={"Stocks"} cards={STOCKS_DATA} />
            <CurrencySection header={"Quotes"} cards={QUOTES_DATA} />
        </CurrenciesContainer>
    )
}

export default Currencies;