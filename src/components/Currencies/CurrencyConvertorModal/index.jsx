import { useState } from "react";

import { AmountInput, Label, CurrencyContainer, CurrencyWrapper, CurrencyImage, CurrencyName, CurrentCurrency, ConvertibleCurrency, CurrenciesContainer, ConvertButton, ConvertedAmount } from "./styled"

import Modal from "@components/Modal";

import { BASE_CURRENCY } from "@constants/currencies";
import convertCurrency from "@utils/convertor"
import Select from "./Select";

const CurrencyConvertorModal = ({ isOpen, close, chosenCurrency, amount, setAmount, currencies }) => {
    const { id: chosenCurrencyName, img } = chosenCurrency;

    const [convertedAmount, setConvertedAmount] = useState(0);
    const [targetCurrency, setTargetCurrency] = useState(BASE_CURRENCY);


    const handleChangeAmount = (e) => {
        setAmount(e.target.value);
    };

    const handleConvert = () => {
        const convertedValue = convertCurrency(currencies, amount, chosenCurrencyName, targetCurrency.id);
        setConvertedAmount(Number(convertedValue));
    }

    return (
        <Modal isOpen={isOpen} close={close}>
            <AmountInput value={amount} onChange={handleChangeAmount} />
            <CurrenciesContainer>
                <CurrentCurrency>
                    <Label>From</Label>
                    <CurrencyContainer>
                        <CurrencyWrapper>
                            <CurrencyImage src={img} />
                            <CurrencyName>
                                {chosenCurrencyName}
                            </CurrencyName>
                        </CurrencyWrapper>
                    </CurrencyContainer>
                </CurrentCurrency>
                <ConvertibleCurrency>
                    <Label>To</Label>
                    <Select targetCurrency={targetCurrency} chosenCurrency={chosenCurrency} setTargetCurrency={setTargetCurrency} setConvertedAmount={setConvertedAmount} />
                </ConvertibleCurrency>
            </CurrenciesContainer>
            <ConvertedAmount>Converted amount: {convertedAmount} {targetCurrency.id}</ConvertedAmount>
            <ConvertButton onClick={handleConvert}>Convert</ConvertButton>
        </Modal>
    )
}

export default CurrencyConvertorModal;