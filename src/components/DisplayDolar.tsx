import { formatCurrency, formatDate } from "../helpers"
import { Dolar } from "../types"

type DisplayDolarProps = {
    dolar: Dolar
}

export default function DisplayDolar({dolar} : DisplayDolarProps) {
  return (
    <div className="m-5 ">
        <p className="text-2xl text-center text-slate-100 font-bold">{`Dolar ${dolar.nombre}`}</p>
        <p className="text-5xl text-center text-white font-bold">{dolar.nombre === 'Blue' ? formatCurrency(dolar.venta) : formatCurrency(dolar.venta*1.45)}</p>
        <p className="text-md text-center text-white font-bold">{formatDate(dolar.fechaActualizacion)}</p>
    </div>
  )
}
