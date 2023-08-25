import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';




const Header = () => {
  return (
  <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div 
        className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8"
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
              src={'/logo.svg'}
              width={200}
              height={48}
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
