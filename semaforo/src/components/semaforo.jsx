import Semaforo from "../assets/Semaforo.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Limpieza al desmontar
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
<motion.img
initial={{ x: screenWidth * 0.70, y: 100 }}
className="semaforo"
src={Semaforo}
alt=""
/>
    </>
  );
}

export default App;



