import { useCoinStore } from "../store"
import CriptoComponent from "./DisplayCripto"


export default function DisplayCripto() {

  const criptos = useCoinStore(state => state.criptos)

  return (
    <div className="p-5 w-full lg:w-1/2">
        <h2 className=" uppercase text-center text-xl font-extrabold text-white">Criptomonedas</h2>

          <div className="flex flex-col gap-1 md:gap-5 mt-5 md:grid md:grid-cols-2">
            {criptos.map(cripto => (
              <CriptoComponent
                key={cripto.name}
                cripto={cripto}
              />
            ))}
          </div>
        


    </div>
  )
}
