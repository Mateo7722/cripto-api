import { useCoinStore } from "../store";
import DisplayDolar from "./DisplayDolar";

export default function DolarComponent() {

  const dolarOficial = useCoinStore(state => state.dolarOficial)
  const dolarBlue = useCoinStore(state => state.dolarBlue)


  return (
    <div className="w-1/2 p-10 flex flex-col justify-center items-center lg:justify-between lg:items-stretch">

        <h1 className="uppercase text-4xl text-center text-white font-bold">Precios del Mercado</h1>

        <div className="mt-10 flex flex-col md:flex-row justify-between">
            
            <DisplayDolar
                dolar={dolarOficial}
            />

            <DisplayDolar
                dolar={dolarBlue}
            />
            
        </div>


    </div>
  )
}
