import {z} from 'zod'
import { DolarSchema } from '../schema/dolar-schema'


export type Dolar = z.infer<typeof DolarSchema>

export type Cripto = { 
    Fullname: string; 
    name: string; 
    PRICE: string; 
    IMAGEURL: string; 
    LASTUPDATE: string;
    CHANGEPCT24HOUR: string
}