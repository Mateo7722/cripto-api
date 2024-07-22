import axios from 'axios';
import { CriptoNamesSchema, DisplaySchema, DolarSchema } from '../schema/dolar-schema';


export async function getOficial() {
    const url = 'https://dolarapi.com/v1/dolares/oficial';
    const {data} = await axios(url)
    const result = DolarSchema.safeParse(data)
    
    if(result.success){
        return result.data
    }
}

export async function getBlue() {
    const url = 'https://dolarapi.com/v1/dolares/blue';
    const {data} = await axios(url)
    const result = DolarSchema.safeParse(data)

    if(result.success){
        return result.data
    }
}

export async function getCriptos() {
    //Consigo los nombres de las 20 criptomonedas con mayor valor
    const urlNames = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
    const {data: {Data}} = await axios(urlNames)
    const resultNames = CriptoNamesSchema.safeParse(Data)

    //Pego los nombres en esta url para buscar su información
    let urlCriptos = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms="
    resultNames.data?.map(coin => {
        urlCriptos += `${coin.CoinInfo.Name},`
    })
    urlCriptos = urlCriptos.slice(0, -1)
    urlCriptos += "&tsyms=USD"

    //Consigo las 20 criptos con su información
    const {data: {DISPLAY}} = await axios(urlCriptos)
    const resultCriptos = DisplaySchema.safeParse(DISPLAY)
    
    //Junto el resultNames con resultCriptos para obtener el nombre completo y su información
    if(resultCriptos.data && resultNames.data){
        const criptoArray = Object.keys(resultCriptos.data).map(key => {
            return {
                name: key,
                Fullname: resultNames.data.filter(coin => coin.CoinInfo.Name === key)[0].CoinInfo.FullName,
                ...resultCriptos.data[key].USD
            };
        });

        console.log(criptoArray)
        return criptoArray
        
    }

}