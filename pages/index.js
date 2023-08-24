


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
    <div className='bg-primary/60 flex justify-center w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='basis-[40%] h-full '>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto' >
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
            dskjghfñsdfjg djhgn pejrhg pqehtg wekgjnp kjpg wer.
            gjerpg owjerpgwer g.wekrhg pwerngñegnpiug
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
      <div className='basis-[40%] h-full flex-col items-center  text-white text-center flex justify-center container '>
        <motion.div 
          className='border w-[400px] h-[400px] rounded-full bg-blanco backdrop-filter-none'
            variants={fadeIn('center', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden' 
          >      
      <ParticlesContainer />
          
          {/* <spline-viewer 
            url="https://prod.spline.design/F3FBGaxqRm9mmlCe/scene.splinecode"></spline-viewer> */}
        
        </motion.div> 
        

      </div>
    </div>
    </>

  )
}



export default Home;
