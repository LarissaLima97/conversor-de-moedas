import axios from "axios";


const BASE_URL = "https://economia.awesomeapi.com.br/last/";


function MultiplyValue (userValue: number , coinValue: number) {
    return (userValue * coinValue).toFixed(2); 
} 


const currencyInfo = async (currencyFrom: string, currencyTo: string) => {
    const res = await (
        axios.get(
            `${BASE_URL}${currencyFrom}-${currencyTo}`
        )
    )
    return res.data;
}

async function extractConversionValue (currencyFrom: string, currencyTo: string) {
    const res = await (currencyInfo(currencyFrom,currencyTo));
    const concatCurrencies = currencyFrom.concat(currencyTo);

    return res[concatCurrencies].high;
}

export const convertValue = async (currencyFrom: string, currencyTo: string, userValue:  number) => {
    const extractConversion = await(extractConversionValue(currencyFrom, currencyTo));
    const convertValue = MultiplyValue(userValue, extractConversion);

    return convertValue;
    
}