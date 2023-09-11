import SkillsGrid from "../../components/SkillsGrid";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";



const About = () => {
  


  return (
    <div className="h-full py-16 xl:py-32 text-center xl:text-left ">
      <div className="container mx-auto flex flex-col gap-y-8 lg:items-start xl:flex-row gap-x-20 pl-10">
        
        <div>
          <h2 className="h2 text-center">
            <span className="text-secondary">{"{"}</span>
            Hola
            <span className="text-accent">Mundo</span>
            <span className="text-secondary">{"}"}</span>
          </h2>
          <h1 className="text-2xl pb-4">un poco sobre mi</h1>
          <div className="">
            {/* <p className="text-secondary">{".intereses {"}</p> */}
              <p className="">{"Desarrollo web"}<br/> </p>
              <p className="">{"Diseño"}<br/> </p>
              <p className="">{"Tecnología"}<br/> </p>
              <p className="">{"Gaming"}<br/> </p>
              <p className="">{"Fernet"}<br/> </p>
              {/* <p className="text-secondary">{"}"}</p> */}
          </div>      
        </div>
      
        <div className="container mx-auto flex flex-col gap-y-8 lg:items-start gap-x-20 pb-10">
          <motion.h2
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center">
            <span className="text-secondary">{"{"}</span>
            {"Herramientas"}
            <br />
            {" de "}
            <span className="text-accent">{"desarrollo"}</span>
            <span className="text-secondary">{"}"}</span>
          </motion.h2>
          <div>
            <SkillsGrid />
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default About;
