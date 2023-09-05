import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';




const Header = () => {
  return (
  <header className= " bg-gris/40 backdrop-blur-sm z-50 w-full flex items-center px-5 xl:px-0 xl:h-[100px]">
    <div className="container mx-auto">
      <div 
        className="flex lg:flex-row justify-between items-center gap-y-6 md:gap-y-6 "
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        animate='show'
        exit='hidden'
      >
        <motion.span
          variants={fadeIn('', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <Link href={''} >
            <Image
              src={'/logo-white.svg'}
              width={100}
              height={100}
              alt=''
              priority={true}
            />
          </Link>
        </motion.span>

        <motion.span
          variants={fadeIn('', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <Socials />
        </motion.span>
      </div>
    </div>  
  </header>)
};

export default Header;
