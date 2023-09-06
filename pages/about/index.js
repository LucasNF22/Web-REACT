import { motion } from 'framer-motion';
import { useState } from 'react';




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
          <span className="text-secondary">{'{'}</span>{'Sobre'}<br />
          <span className="text-accent">{'mí'}</span>
          <span className="text-secondary">{'}'}</span>
        </h2>
        

      </div>
    </div>
  )
};

export default About;
