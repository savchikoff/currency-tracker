import axios from "axios";

const getCurrencies = async () => {
    const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_XtJ72eTyHEhfAF3Ky8OH9ODLomQkMVU4lXFQs3oU&currencies=USD%2CARS%2CCAD%2CJPY%2CAUD%2CCNY%2CEUR%2CBTC%2CLTC");
    return response.data;
}

export default getCurrencies;