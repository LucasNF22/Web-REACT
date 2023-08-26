import WorkSlider from '../../components/WorkSlider'

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';


const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      
      <div className="container mx-auto">
        
        <div className="flex flex-col xl:flex-row gap-x-8 ">

          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              className='h2 xl:mt-8'
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'

            >
              Hola <span className='text-accent'>Mundo</span>
            </motion.h2>
            <motion.p
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
            >
              A alalala lala longg...  dwskhflasdbfasdliflaskdhf
              lakjsdhflkajshflkjashdflkjahsfsdfasdfgasdf
              asdfasdfasdfasdfasfasdf.asdfasdfasdfasdfasfasdfasdfasdf
            </motion.p>

          </div>
          
          <motion.div 
            className='w-full xl:max-w-[65%]'
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
