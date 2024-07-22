import {z} from 'zod'

export const DolarSchema = z.object({
    nombre: z.string(),
    venta: z.number(),
    fechaActualizacion: z.string()
})


export const CriptoNameSchema = z.object({
    CoinInfo: z.object({
        Name: z.string(),
        FullName: z.string()
    })
})

export const CriptoNamesSchema = z.array(CriptoNameSchema)

export const CoinSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    LASTUPDATE: z.string(),
    CHANGEPCT24HOUR: z.string(),
})

export const DisplaySchema = z.record(z.record(CoinSchema))