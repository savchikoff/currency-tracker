import { useCallback, useEffect, useState } from "react";

import CurrencySection from "./CurrencySection";
import CurrenciesContainer from "./styled";


import { QUOTES_DATA, STOCKS_DATA } from "@constants/currencies";
import getCurrencies from "@utils/getCurrencies";
import Modal from "../Modal";

const Currencies = () => {

    const [isOpen, setOpen] = useState(false);

    console.log(isOpen);

    const [currencies, setCurrencies] = useState();

    // const getCurrenciesValues = async () => {
    //     const response = await getCurrencies();
    //     setCurrencies(response);
    // }

    // useEffect(() => {
    //     getCurrenciesValues();
    // }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    })


    return (
        <>
            <CurrenciesContainer>
                <CurrencySection header={"Stocks"} cards={STOCKS_DATA} />
                <CurrencySection header={"Quotes"} cards={QUOTES_DATA} />
            </CurrenciesContainer>
            <button onClick={() => setOpen(true)}>Open</button>
            <Modal isOpen={isOpen} close={handleClose}>
                <h2>Hello from the Modal</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                    dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                    ut fermentum massa justo sit amet risus. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam. Cras mattis consectetur purus
                    sit amet fermentum.
                </p>
            </Modal>
        </>
    )
}

export default Currencies;