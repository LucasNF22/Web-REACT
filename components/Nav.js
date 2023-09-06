// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'sobre mí', path: '/about', icon: <HiUser /> },
  { name: 'skills', path: '/skills', icon: <HiRectangleGroup /> },
  { name: 'proyectos', path: '/work', icon: <HiViewColumns /> },
  { name: 'servicios', path: '/services', icon: <HiChatBubbleBottomCenterText />, },
  { name: 'contacto', path: '/contact', icon: <HiEnvelope />, },
];


import { useRouter } from 'next/router';
import Link from 'next/link';


const Nav = () => {

  const router = useRouter();
  const pathName = router.pathname;


  return (
    <nav
      className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0
      mt-auto xl:right-[2%] z-30 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'
      >
      <div
        className='flex w-full xl:flex-col items-center justify-between xl:justify-center
          gap-y-10 px-8 md:px-30 xl:px-0 h-[60px] xl:h-max py-8 bg-gris/60 backdrop-blur-sm
          text-3xl xl:text-xl xl:rounded-full'
        >
        {/* inner */}
        { navData.map( (link, index) => {
          return(
            <Link
              className={`${link.path === pathName && 'text-accent' }
                relative flex items-center group hover:text-accent hover:drop-shadow-glow transition-all
                duration-200 `
              }
              href={ link.path }
              key={ index }
              >

              {/* Seccion */}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-blanco relative flex text-primary items-center
                  p-[6px] rounded-[3px]'
                >
                  <div className='text-[12px] leading-none font-semibold capitalize'>
                    {link.name}
                  </div>
                  {/* Flechita */}
                  <div className='border-solid border-l-blanco border-l-8
                  border-y-transparent border-y-[10px] border-r-0 absolute -right-2'>
                  </div>
                </div>
              </div>
              {/* Icono */}
              <div>{ link.icon }</div>

            </Link>)
        })}
      </div>
    </nav>
  )
};

export default Nav;
