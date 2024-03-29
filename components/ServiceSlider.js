import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { RxRulerSquare, RxDesktop, RxCode, RxThickArrowRight } from 'react-icons/rx'
import Link from "next/link";

// data
export const servicios = [
  {
    name: "Diseño",
    icon: <RxRulerSquare />,
    desc: "Diseño responsivo y a medida.",
  },
  {
    name: "Desarrollo",
    icon: <RxCode />,
    desc: "Desarrollo de aplicacion y paginas web.",
  },
  {
    name: "Renderizado 3D",
    icon: <RxDesktop />,
    desc: "Renderizado fotorrealista de alta calidad.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15
        },

      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, FreeMode]}
      className="h-[200px] sm:h-[400px] "
    >
      {
        servicios.map((servicio, index)=>{
          return (
            <SwiperSlide key={index}>
              <div className="bg-gris/30 p-5 border border-secondary/10 rounded-lg h-max sm:min-h-[280px] flex sm:flex-col justify-start gap-x-6 sm:gap-0 group cursor-pointer hover:bg-accent/40  transition-all duration-200">
                
                <div className="text-4xl text-accent mb-4">{servicio.icon}</div>
                
                <div className="mb-8 grow">
                  <div className="mb-2 text-lg">{servicio.name}</div>
                  <p className="max-w-[350px] leading-normal ">{servicio.desc}</p>
                </div>
                
                <Link href={'/contact'} className="flex items-center ">
                  <RxThickArrowRight className=" text-2xl group-hover:text-3xl group-hover:drop-shadow-glow group-hover:text-accent transition-all duration-200"/>  
                </Link>
                
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
