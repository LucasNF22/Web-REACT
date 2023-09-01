import Link from "next/link";
import { RiInstagramLine, RiLinkedinLine, RiGithubLine  } from "react-icons/ri"



const Socials = () => {
  return (
    <div className="flex items-center gap-x-6 text-xl" >
      <Link href={'https://www.instagram.com/lucassnf/?hl=es'} className="hover:text-accent transition-all duration-250">
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/lucasnfiorentino/overlay/contact-info/'} className="hover:text-accent transition-all duration-250">
        <RiLinkedinLine />
      </Link>
      <Link href={'https://github.com/LucasNF22'} className="hover:text-accent transition-all duration-250">
        <RiGithubLine />
      </Link>
    </div>
    
    )
};

export default Socials;
