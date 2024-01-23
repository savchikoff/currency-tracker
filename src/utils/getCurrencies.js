import axios from "axios";

const URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_cycwWjf73O9cQNMx1Il61BknausXt7lRgE6CmZSb&currencies=USD%2CARS%2CCAD%2CJPY%2CAUD%2CCNY%2CEUR%2CBTC%2CLTC";

const getCurrencies = async () => {
    const { data } = await axios.get(URL);
    return data;
}

export default getCurrencies;