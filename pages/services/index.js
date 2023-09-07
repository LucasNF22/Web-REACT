import ServiceSlider from "../../components/ServiceSlider";
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';



const Services = () => {

  return (
    <div className="flex items-start py-10 xl:py-36 ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center xl:w-[30vw] lg:text-left mb-4 xl:mb-0">
          <motion.h2
              className='h2 w-full'
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
            >
              <span className='text-secondary align-middle'>{">"}</span> 
              Mis
              <span className='text-accent'>Servicios</span>
              <span className='text-secondary blink '>{"_"}</span> 
            </motion.h2>
          </div>
          <motion.div 
            className="w-full xl:max-w-[60%]"
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services;
