import { AmountInput, Title, CurrencyContainer, CurrencyWrapper, CurrencyImage, CurrencyName, CurrentCurrency, ConvertibleCurrency, CurrenciesContainer } from "./styled"

import Modal from "@components/Modal";

const CurrencyConvertorModal = ({ isOpen, close }) => {
    return (
        <Modal isOpen={isOpen} close={close}>
            <AmountInput />
            <CurrenciesContainer>
                <CurrentCurrency>
                    <Title>From</Title>
                    <CurrencyContainer>
                        <CurrencyWrapper>
                            <CurrencyImage />
                            <CurrencyName>
                                USD
                            </CurrencyName>
                        </CurrencyWrapper>
                    </CurrencyContainer>
                </CurrentCurrency>
                <ConvertibleCurrency>
                    <Title>To</Title>
                    <CurrencyContainer>
                        <CurrencyWrapper>
                            <CurrencyImage />
                            <CurrencyName>
                                USD
                            </CurrencyName>
                        </CurrencyWrapper>
                    </CurrencyContainer>
                </ConvertibleCurrency>
            </CurrenciesContainer>
        </Modal>
    )
}

export default CurrencyConvertorModal;