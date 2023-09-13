import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export const skillClass = [
  {
    id: "fr",
    name: "FrontEnd",
  },
  {
    id: "bk",
    name: "BackEnd",
  },
  {
    id: "ui",
    name: "ui/ux",
  },
  {
    id: "ds",
    name: "Diseño",
  },
  {
    id: "ot",
    name: "Otros",
  },
];

export const skills = [
  {
    name: "React",
    type: "fr",
  },
  {
    name: "JavaScript",
    type: "fr",
  },
  {
    name: "Express JS",
    type: "bk",
  },
  {
    name: "CSS",
    type: "fr",
  },
  {
    name: "HTML",
    type: "fr",
  },
  {
    name: "My SQL",
    type: "bk",
  },
  {
    name: "PHP",
    type: "bk",
  },
  {
    name: "Node Js",
    type: "bk",
  },
  {
    name: "Api Rest",
    type: "bk",
  },
  {
    name: "Scrum",
    type: "ot",
  },
  {
    name: "Sequelize",
    type: "bk",
  },
  {
    name: "Postman",
    type: "bk",
  },
  {
    name: "Scss",
    type: "fr",
  },
  {
    name: "Gulp",
    type: "fr",
  },
  {
    name: "BEM",
    type: "fr",
  },
  {
    name: "Crud",
    type: "bk",
  },
  {
    name: "Photoshop",
    type: "ds",
  },
  {
    name: "Illustrator",
    type: "ds",
  },
  {
    name: "3D Max",
    type: "ds",
  },
  {
    name: "Corona-Renderer",
    type: "ds",
  },
  {
    name: "Vray",
    type: "ds",
  },
  {
    name: "TypeScript",
    type: "fr",
  },
  {
    name: "MongDB",
    type: "bk",
  },
  {
    name: "FireBase",
    type: "bk",
  },
  {
    name: "Redux",
    type: "fr",
  },
  {
    name: "BootStrap",
    type: "fr",
  },
  {
    name: "Next JS",
    type: "fr",
  },
  {
    name: "Framer Motion",
    type: "fr",
  },
  {
    name: "Spline",
    type: "fr",
  },
  {
    name: "Figma",
    type: "ui",
  },
  {
    name: "Trello",
    type: "ot",
  },
  {
    name: "Miro",
    type: "ui",
  },
  
  
];

const SkillsGrid = () => {
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
      <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 pb-6 justify-center lg:justify-start">
        {skillClass.map((sClass, itemIndex) => {
          return (
            <div
              key={itemIndex}
              className={` ${
                index === itemIndex &&
                "after:bg-accent text-accent after:w-[100%] after:transition-all after:duration-300 drop-shadow-glow" } 
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-secondary after:absolute after:-bottom-1 after:left-0 hover:text-accent hover:drop-shadow-glow transition-all duration-100`}
              onClick={() => changeStates(itemIndex, sClass.id)}
            >
              {sClass.name}
            </div>
          );
        })}
      </div>

      <div 
        className="flex flex-wrap gap-6 justify-center lg:justify-start group w-full"   
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

export default SkillsGrid;
