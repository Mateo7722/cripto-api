import DisplayCripto from "./components/CriptoComonent"
import DolarComponent from "./components/DolarComponent"
import { useCoinStore } from "./store"

function App() {

  const fetchDolars = useCoinStore(state => state.fetchDolars)
  const fetchCriptos = useCoinStore(state => state.fetchCriptos)
  fetchDolars()
  fetchCriptos()

  return (
 
      <div className="flex flex-col justify-center items-center mt-20">
        <DolarComponent/>
        <DisplayCripto/>
      </div>

  )
}

export default App
