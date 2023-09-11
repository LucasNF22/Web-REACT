
import ProjectsBtn from "../components/ProjectsBtn";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

import { Spline3D } from "../components/Spline3D";



const Home = () => {


  return (
    <>
      
      <div className=" flex flex-col xl:flex-row justify-center items-center w-full relative pb-10 ">
        
        <div className="  ">
          <div className="text-center flex flex-col justify-start pt-10 xl:pt-40 xl:text-left h-full container mx-auto ">
            <motion.h1
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              Lucas Fiorentino <br />
              Web <span className="text-accent"> Developer</span>
            </motion.h1>
            <motion.p
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Diseño, Tecnología y Desarrollo.
            </motion.p>
            
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        <div className="xl:basis-[40%] flex items-center justify-center xl:pt-40 container ">
        <Spline3D/>
        </div>
      </div>
    </>
  );
};

export default Home;
