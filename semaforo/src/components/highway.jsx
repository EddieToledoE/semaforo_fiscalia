import Higway from '../assets/Abajo.svg'
import Carro from '../assets/carro-removebg-preview.png'
import Semaforo from '../assets/Semaforo.svg'
import  { useEffect, useState } from 'react';
import { motion } from "framer-motion"
function App() {
  
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Limpieza al desmontar
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
      <>
       
    <motion.div className='highway-container'>
        <img className='highway-img' src={Higway} alt="" />
    </motion.div>
    <motion.img
    animate={{ x: [0,screenWidth - 100]}}
    transition={{ yoyo: Infinity, duration: 40, repeat: Infinity}}
    className='car' src={Carro} alt="" />
    <motion.img
     initial={{ x: screenWidth * 0.8, y: 100}}
    className='semaforo' src={Semaforo} alt="" />
      </>
    )
  }
  
  export default App