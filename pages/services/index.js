import { motion } from "framer-motion";
import { fadeIn } from '../../variants';
import { HiArrowLongRight } from 'react-icons/hi2'

export const servicios = [
  {
    name: 'Diseño',
    icono: <HiArrowLongRight/>,
    desc: 'asdak sjhdgka dfhdg daska'
  },
  {
    name: 'Desarrollo',
    icono: <HiArrowLongRight/>,
    desc: 'asdaksjhdsdfsdf  sdfs dfgkajhdgka'
  },
  {
    name: 'Renderizado 3D',
    icono: <HiArrowLongRight/>,
    desc: 'asdaksjhdsdf sdf sdfsfsfsd fgkajhdgka'
  },
  
]

const Services = () => {
  return (
    <div className="container mx-auto">
        
        <div className="flex flex-col xl:flex-row gap-x-8 pt-11 xl:pt-32">

          <div className='text-center flex md:w-[35%] flex-col lg:text-left mb-4 xl:mb-0'>
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
          <div className="flex justify-center gap-8 w-full  xl:w-[45%]">
            {
              servicios.map((servicio)=>{
                return(
                  <div className="bg-accent/20 p-5 border border-secondary/20 rounded-lg w-[30%] flex flex-col items-start">
                    <div className="text-2xl">
                      {servicio.icono}
                    </div>
                    <div className="pt-4 font-bold">
                      {servicio.name}
                    </div>
                    <p className="font-light pt-2 text-sm">
                      {servicio.desc}
                    </p>
                  
                    
                  </div>
                )
              })
            }
          </div>
          

        </div>

      </div>
  )
}

export default Services;
