import { motion } from 'framer-motion';
import { useState } from 'react';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si';

export const skillClass = [
  {
    id: 'fr',
    name: 'FrontEnd',
  },
  {
    id: 'bk',
    name: 'BackEnd',
  },
  {
    id: 'ui',
    name: 'ui/ux',
  },
  {
    id: 'ds',
    name: 'Diseño',
  },
  {
    id: 'ot',
    name: 'Otros',
  },

];

export const skills = [
  {
      name: 'React',
      type: 'fr',
  },
  {
      name: 'Reaqweqwct',
      type: 'fr',
  },
  {
      name: 'Reqweact',
      type: 'fr',
  },
  {
      name: 'Reaqwect',
      type: 'fr',
  },
  {
      name: 'Rqweeqweeact',
      type: 'fr',
  },
  {
      name: 'Reacqweqweet',
      type: 'fr',
  },
  {
      name: 'Reac qwe t',
      type: 'fr',
  },
  {
      name: 'Reqwe qact',
      type: 'fr',
  },
  {
      name: 'Reqweact',
      type: 'fr',
  },
  {
      name: 'React',
      type: 'fr',
  },
  {
      name: 'Javascript',
      type: 'bk',
  },
  {
      name: 'Figma',
      type: 'ui',
  },
  {
      name: 'Illustrator',
      type: 'ds',
  },
  {
      name: 'Corona Render',
      type: 'ot',
  },

]


const About = () => {
  const [index, setindex] = useState(0);
  const [selected, setSelected] = useState('fr');
  console.log(selected);

  const changeStates = (itemIndex, id)=>{
    setSelected(id);
    setindex(itemIndex);
  };

  return (
    <div className='h-full py-16 xl:py-32 text-center xl:text-left '>
      <div className='container mx-auto flex flex-col gap-y-8 lg:items-start xl:flex-row gap-x-20 pl-10' >
        <h2 className='h2 text-center'>
          <span className="text-secondary">{'{'}</span>{'Tecnologías'}<br />
          <span className="text-accent">{'Utilizadas'}</span>
          <span className="text-secondary">{'}'}</span>
        </h2>
        <div>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 justify-center lg:justify-start'>
            {
              skillClass.map((sClass, itemIndex)=>{
                return(
                  <div
                    key={itemIndex} 
                    className={` ${index === itemIndex && 'after:bg-accent text-accent after:w-[100%] after:transition-all after:duration-300 drop-shadow-glow'} 
                      cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-secondary after:absolute after:-bottom-1 after:left-0 hover:text-accent hover:drop-shadow-glow transition-all duration-100`}
                    onClick={ ()=>changeStates(itemIndex, sClass.id) }
                    >
                    {sClass.name}
                  </div>
                  
                )
              })
            }
          </div>
          
            <div className='pt-6 flex flex-wrap gap-6 max-w-[700px] justify-center lg:justify-start group w-full'>
              {
                skills.map((skill, index)=>{
                  console.log(skill.type);
                  if(skill.type === selected){
                    return(
                      <div 
                        key={index}
                        className=' bg-blanco px-8 py-2 rounded-lg text-primary font-inter font-semibold border border-secondary hover:drop-shadow-glow '
                      >
                        {skill.name}
                      </div>
                    )
                  }
                })
              }
            </div> 
          
        </div>

      </div>
    </div>
  )
};

export default About;
