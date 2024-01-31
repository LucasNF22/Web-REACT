import Spline from "@splinetool/react-spline";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { Suspense } from "react";
import MyLoader from "./loader";


export const Spline3D = () => {

 
  return (
    // <div>    
    //   <motion.div
    //     variants={fadeIn('up', 2.5)}
    //     initial='hidden'
    //     animate='show'
    //     exit='hidden'
    //     className=" flex object-contai"
    //   >
        
          <Spline  
              scene="https://draft.spline.design/d2jO5JZMsl6kV4WQ/scene.splinecode"
              className={`flex transition-all duration-400 `}
          />
       
    // </motion.div> 

    // </div>
  );
};
