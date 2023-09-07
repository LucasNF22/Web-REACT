import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import SkillsGrid from "../../components/SkillsGrid";


const Skills = () => {
  return (
    <div className=" py-16 xl:py-32 text-center justify-center xl:text-left pb-[100px] ">
      <div className="container mx-auto flex flex-col gap-y-8 lg:items-start xl:flex-row gap-x-20 pb-10">
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
  );
};

export default Skills;
