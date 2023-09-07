import WorkSlider from '../../components/WorkSlider'

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';


const Work = () => {
  return (
    <div className=" bg-primary/30 flex items-start xl:items-center pt-10 h-full md:pb-[120px]">
      
      <div className="container mx-auto">
        
        <div className="flex flex-col xl:flex-row gap-x-8 ">

          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              className='h2 xl:mt-12'
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'

            >
             <span className='text-secondary'>{"<"}</span> 
             Proyectos
             <span className='text-accent'>{"/"}</span>
             <span className='text-secondary'>{">"}</span>
            </motion.h2>
            <motion.p
              className='mb-4 max-w-[300px] mx-auto lg:mx-0 lg:pl-8 lg:max-w-[350px]'
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
            >
              Trabajos realizados a lo largo de mi desarrollo:
            </motion.p>

          </div>
          
          <motion.div 
            className='w-full xl:max-w-[65%] pb-20'
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <WorkSlider />
          </motion.div>

        </div>

      </div>
    </div>
  )
};

export default Work;
