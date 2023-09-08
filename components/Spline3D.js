import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";


export const Spline3D = () => {

  const [isHide, setIsHide] = useState(true);


  setTimeout(() => setIsHide(false), 1000);

  return (
    <div>

      {!isHide 
      
      ? <motion.div
          variants={fadeIn('up', 2.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
        <Spline  
            scene="https://draft.spline.design/K2oXVLJNHp-l5xoD/scene.splinecode"
            className={
              `${isHide && "hidden" }
              flex transition-all duration-400 `}
              />
      </motion.div> 

      : <div className="flex justify-center align-middle">Loading...</div>

      }

    </div>
  );
};