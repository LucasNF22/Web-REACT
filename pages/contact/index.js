import { BsArrowRight } from 'react-icons/BS'
import { fadeIn } from '../../variants'; 
import { motion } from "framer-motion"; 

const Contact = () => {
  return (
    <div className=''>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px] '>
          <motion.h2 
            className='h2 text-center mb-12'
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >Hablemos
            <span className='text-accent'>{'</>'}</span>
          </motion.h2>
          <motion.form 
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='Nombre' className='input border-secondary'/>
              <input type='text' placeholder='Email' className='input border-secondary'/>
            </div>
              <input type='text' placeholder='Asunto' className='input border-secondary'/>
              <textarea placeholder='Mensaje' className='textarea border-secondary'></textarea>
              <button className='btn rounded-full border border-secondary/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                <span className='group-hover:translate-x-[120%] group-hover:opacity-0 transition-all duration-300'>Enviar</span>
                <BsArrowRight className='-translate-x-[120%] opacity-0 group-hover:flex group-hover:-translate-x-0 group-hover:opacity-100 transition-all duration-300 absolute text-[28px]'/>
              </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
};

export default Contact;
