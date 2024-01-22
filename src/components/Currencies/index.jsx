
import { QUOTES_DATA, STOCKS_DATA } from "@constants/currencies";
import CurrencySection from "./CurrencySection";
import { CurrenciesContainer } from "./styled";

const Currencies = () => {
    return (
        <CurrenciesContainer>
            <CurrencySection header={"Stocks"} cards={STOCKS_DATA} />
            <CurrencySection header={"Quotes"} cards={QUOTES_DATA} />
        </CurrenciesContainer>
    )
}

export default Currencies;