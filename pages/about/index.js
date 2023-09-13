
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import AboutContent from "../../components/AboutContent";
import SkillsGrid from "../../components/SkillsGrid";



const About = () => {
  


  return (
    <div className="h-full pt-10 pb-16  text-center xl:text-left ">
      
      <div className="mx-auto flex flex-col gap-y-16 lg:items-start container px-4 gap-x-20 pb-16">
                
        <motion.div 
          className="w-full justify-center align-middle flex flex-col"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <h2 className="h2 text-center">
            <span className="text-secondary">{"{"}</span>
            Hola
            <span className="text-accent">Mundo</span>
            <span className="text-secondary">{"}"}</span>
          </h2>
          <p className="text-center text-xl max-w-md self-center">Soy Lucas Fiorentino, desarrollador web, amante de la tecnologia en general.</p>
        </motion.div>                                       

        <div className="flex flex-col justify-start ">
        <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" text-3xl text-center lg:text-left pb-6 "
          >
              <span className="text-secondary">{"{"}</span>
              {" Un poco sobre"}
              <span className="pl-2 text-accent">{"MI "}</span>
              <span className="text-secondary">{"}"}</span>
          </motion.h2>
          <AboutContent/>
        </div>

        <div className="flex flex-col justify-start ">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" text-3xl text-center lg:text-left pb-6 "
          >
              <span className="text-secondary">{"{"}</span>
              {" Herramientas"}
              <span className="">{" de "}</span>
              <span className="text-accent ">{"desarrollo "}</span>
              <span className="text-secondary">{"}"}</span>
          </motion.h2>
          <SkillsGrid />
        </div>
           
      </div>
    </div>
  
  );
};

export default About;
