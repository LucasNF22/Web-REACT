
import { motion } from "framer-motion";
import { fadeIn } from "../variants";


export const intereses = [
  
    "Desarrollo Web",  
    "Diseño",
    "Tecnología",
    "Gaming",
    "Padel", 
    "Fernet", 
    "Mate", 
]



const AboutContent = () => {
 

  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
     <div 
        className="flex flex-wrap gap-6  justify-center lg:justify-start group w-full"   
      >
        {intereses.map((int, index) => {        
            return (
              <div
                key={index}
                className=" bg-blanco px-8 py-2 rounded-lg text-primary font-inter font-semibold border border-secondary hover:drop-shadow-glow "
              >
                {int}
              </div>
            );
          }
        )}
      </div>


    </motion.div>
  );
};

export default AboutContent;
