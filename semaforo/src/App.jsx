import Nubes from './components/clouds'
import Highway from './components/highway'
import {motion} from "framer-motion"
import './App.css'

function App() {
  return (
    <>
<div>
  <div className='clouds-container'>
    <Nubes />
  </div>
  <div className='Tittle-container'>
    <h1 className='Big-Tittle'>
      Semáforo 
    </h1>
    <h1 className='Tittle'>
    de un cuerpo seguro
    </h1>
    <div className='button-container'>
    <motion.button
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 1.9 }}
     className='start-button'>Iniciar</motion.button>
    </div>
  </div>
    <Highway />
</div>
    </>
  )
}

export default App
