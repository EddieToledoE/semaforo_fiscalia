import Higway from '../assets/Abajo.svg'
import Carro from '../assets/carro-removebg-preview.png'
import Semaforo from '../assets/Semaforo.svg'
import { motion } from "framer-motion"
function App() {
  
    return (
      <>
       
    <motion.div className='highway-container'>
        <img className='highway-img' src={Higway} alt="" />
    </motion.div>
    <motion.img
    animate={{ x: [0, 1800]}}
    transition={{ yoyo: Infinity, duration: 20, repeat: Infinity}}
    className='car' src={Carro} alt="" />
    <motion.img
    initial={{ x: 1500 , y: 100}}
    className='semaforo' src={Semaforo} alt="" />
      </>
    )
  }
  
  export default App