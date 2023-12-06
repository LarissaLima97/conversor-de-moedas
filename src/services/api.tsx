import axios from "axios";


const BASE_URL = "https://economia.awesomeapi.com.br/last/";


function MultiplyValue (userValue: number , coinValue: number) {
    return (userValue * coinValue).toFixed(2); 
} 


export const currencyInfo = async (currencyFrom: string, currencyTo: string) => {
    const res = await (
        axios.get(
            `${BASE_URL}${currencyFrom}-${currencyTo}`
        )
    )
    console.log(res.data)
    return res.data;
}

/**
 * TODO: 
 * Criar uma função para extrair o valor da conversão 
 * Criar uma função que retorne o valor convertido e multiplicado 
 */