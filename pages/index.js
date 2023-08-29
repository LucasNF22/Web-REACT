


import Head from 'next/head';
import ProjectsBtn from '../components/ProjectsBtn';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion'
import ParticlesContainer from '../components/ParticlesContainer';
import { NextScript } from 'next/document';




const Home = () => {
  return (
    <>
    <Head>
      <NextScript type="module" src="https://unpkg.com/@splinetool/viewer@0.9.425/build/spline-viewer.js"></NextScript>
    </Head>
    <div className=' flex justify-center w-full  '>
      <div className='  '>
        <div className='text-center flex flex-col justify-start pt-10 xl:pt-40 xl:text-left h-full container mx-auto' >
          <motion.h1
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'
          >
            Hola, Soy Lucas <br/>Web
            <span className='text-accent'> Developer</span>
          </motion.h1>
          <motion.p
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            asjdasdjhfglasfgkajshdgfkasjdhfgkasjdgf.asd fasiduflashfgkasjdfglb alsjdfloasbflowibfli
          </motion.p>
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className='basis-[40%] h-full flex-col items-center text-white text-center justify-start pt-10 xl:pt-40 container hidden lg:flex '>
        <motion.div 
          className='border w-[400px] h-[400px] rounded-full bg-gris backdrop-filter-none object-contain'
            variants={fadeIn('center', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden' 
          >     

            <ParticlesContainer />      
          
          <spline-viewer 
            url="https://prod.spline.design/F3FBGaxqRm9mmlCe/scene.splinecode"></spline-viewer> 
        
         </motion.div>  
        

       </div>
    </div>
    </>

  )
}



export default Home;
