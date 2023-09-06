import { motion } from "framer-motion";
import { fadeIn } from '../../variants';


const Services = () => {
  return (
    <div className="container mx-auto">
        
        <div className="flex flex-col xl:flex-row gap-x-8 pt-11 ">

          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              className='h2 xl:mt-12'
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
            >
              <span className='text-secondary text-7xl align-middle'>{"("}</span> 
              Mis
              <span className='text-accent'> Servicios</span>
              <span className='text-secondary blink '>{"_"}</span> 
              <span className='text-secondary text-7xl align-middle '>{")"}</span> 
            </motion.h2>
           

          </div>
          
          

        </div>

      </div>
  )
}

export default Services;
