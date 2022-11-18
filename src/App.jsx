import './App.css'
import Lista from './components/Lista'
import Valores from './components/Valores'
import { Datos } from './context/Contexto'

function App() {

  return (
    <>
    <h1>useContext</h1>
    <Datos>
    <div className='App'>
    <Lista />  
    <Valores />
    </div>
    </Datos>
    </>
  )
}

export default App
