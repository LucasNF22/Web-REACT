// Framer motion
import { motion } from 'framer-motion';

const transitionsVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: [ '0%', '100%' ],
    width: [ '0%', '100%' ],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-gris'
        variants={transitionsVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.1, duration: 0.3, ease:'easeInOut' }}
      ></motion.div>
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-accent'
        variants={transitionsVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.2, duration: 0.45, ease:'easeInOut' }}
      ></motion.div>
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-secondary'
        variants={transitionsVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.25, duration: 0.45, ease:'easeInOut' }}
      ></motion.div>

    </>
  );
};

export default Transition;
