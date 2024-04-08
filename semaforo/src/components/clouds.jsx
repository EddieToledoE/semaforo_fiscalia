import Nube1 from '../assets/Nube1.svg'
import Nube2 from '../assets/Nube2.svg'
import Nube3 from '../assets/Nube3.svg'
import Nube4 from '../assets/Nube4.svg'
import { motion } from "framer-motion"
function App() {
  
    return (
      <>
    <motion.div
    initial={{ y: 100 }}
    animate={{ x: [0, 1800]}}
    transition={{ yoyo: Infinity, duration: 40, repeat: Infinity}}
    className='cloud1-container'>
    <img src={Nube1} alt="" />
    </motion.div>
    <div className='cloud2-container'>
    <img src={Nube2} alt="" />
    </div>
    <motion.div
     initial={{ y: 150 }}
     animate={{ x: [0, 500]}}
     transition={{ yoyo: Infinity, duration: 20, repeat: Infinity}}
     className='cloud3-container'>
    <img src={Nube3} alt="" />
    </motion.div>
    <div className='cloud4-container'>
    <img src={Nube4} alt="" />
    </div>

  
      </>
    )
  }
  
  export default App