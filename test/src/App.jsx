
import './App.css'
//import { Persona } from './components/Persona'
//import { Practica1 } from './components/Practica1'
//import { PracticaProps } from './components/PracticaProps'
import { Concorchetes } from './components/Concorchetes'


//objeto arranca con llaves 
// lista arranca con corchetes 


//armar una lista, pasarla por prop y en la pantalla -> para acceder/recorrer las propiedades/valores de una lista se tiene que mapear 
//armar un objeto, pasarla por prop y mostrarlo en la pantalla -> para acceder a las propiedades de un objeto se usa el punto

function App() {

const lista = [0,1] 
const objetoPrueba = {nombre : "agus"}

  return (
    <>
      <Concorchetes lista={lista} objeto={objetoPrueba}/>

      
      
    </>
  )
}

export default App
