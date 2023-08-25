import Link from "next/link";
import { RiInstagramLine, RiLinkedinLine, RiGithubLine  } from "react-icons/ri"



const Socials = () => {
  return (
    <div className="flex items-center gap-x-6 text-xl" >
      <Link href={''} className="hover:text-accent transition-all duration-250">
        <RiInstagramLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-250">
        <RiLinkedinLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-250">
        <RiGithubLine />
      </Link>
    </div>
    
    )
};

export default Socials;
