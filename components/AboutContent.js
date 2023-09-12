import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";



export const aboutMe = [
    {
      id: "sk",
      name: "Skills",
    },
    {
      id: "int",
      name: "Intereses",
    },
  ];

export const intereses = { 

}



const AboutContent = () => {
  const [index, setindex] = useState(0);
  const [selected, setSelected] = useState("fr");
  console.log(selected);

  const changeStates = (itemIndex, id) => {
    setSelected(id);
    setindex(itemIndex);
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 justify-center lg:justify-start">
        {AboutContent.map((cont, itemIndex) => {
          return (
            <div
              key={itemIndex}
              className={` ${
                index === itemIndex &&
                "after:bg-accent text-accent after:w-[100%] after:transition-all after:duration-300 drop-shadow-glow" } 
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-secondary after:absolute after:-bottom-1 after:left-0 hover:text-accent hover:drop-shadow-glow transition-all duration-100`}
              onClick={() => changeStates(itemIndex, cont.id)}
            >
              {cont.name}
            </div>
          );
        })}
      </div>

      <div 
        className="pt-6 flex flex-wrap gap-6 max-w-[700px] justify-center lg:justify-start group w-full"   
      >
        {skills.map((skill, index) => {
          if (skill.type === selected) {
            return (
                <div
                  key={index}
                  className=" bg-blanco px-8 py-2 rounded-lg text-primary font-inter font-semibold border border-secondary hover:drop-shadow-glow "
                >
                  {skill.name}
                </div>
            );
          }
        })}
      </div>
    </motion.div>
  );
};

export default AboutContent;
