import { BsArrowRight } from 'react-icons/bs'
import { fadeIn } from '../../variants'; 
import { motion } from "framer-motion"; 
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const refForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_blkqkeh";
    const templateId = "template_u1skwkr";
    const apikey = "ZdTa6UykKBg3TRFCt";

    emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
      .then( 
        result => console.log(result.text) 
      )

      .catch( error => console.log(error) )

      alert('¡El mensaje ha sido enviado!');
      window.location.replace('/contact');

  }


  return (
    <div className=''>
      <div className='container mx-auto pt-10 xl:pt-16 text-center xl:text-left flex items-center justify-center h-full'>
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
            ref={refForm}
            action=''
            onSubmit={handleSubmit}
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className='flex gap-x-6 w-full'>
              <input type='text' required placeholder='Nombre' name='userName' className='input border-secondary invalid:[&:focus]:border-red-500'/>
              <input type='email' required placeholder='Email' name='userEmail' className='input border-secondary  invalid:[&:focus]:border-red-500'/>
            </div>
              <input type='text' placeholder='Asunto' name='subject' className='input border-secondary'/>
              <textarea required placeholder='Mensaje' name='message' className='textarea border-secondary  invalid:[&:focus]:border-red-500'></textarea>
              <button type='submit' className='btn rounded-full border border-secondary/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent  group hover:drop-shadow-glow '>
                <span className='group-hover:translate-x-[120%] group-hover:opacity-0 transition-all duration-300'>Enviar</span>
                <BsArrowRight className='-translate-x-[120%] opacity-0 group-hover:flex group-hover:-translate-x-0 group-hover:opacity-100 transition-all duration-300 absolute text-[28px] '/>
              </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
};

export default Contact;
