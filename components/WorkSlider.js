import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// data
export const workSlider = {
  slides: [
    {
      works: [
        {
          title: "Let-Bar",
          path: "/let-bar.jpg",
        },
        {
          title: "Dashboard/Let-Bar",
          path: "/panel-control-let-bar.jpg",
        },
        {
          title: "App-clima",
          path: "/appClima.jpg",
        },
        {
          title: "BlogDeCafe",
          path: "/blogDeCafe.jpg",
        },

      ],
    },
    {
      works: [
        {
          title: "Store FrontEnd",
          path: "/fe-store.jpg",
        },
        {
          title: "RealState-dev",
          path: "/realStateDev.jpg",
        },
        {
          title: "Primavera Sound",
          path: "/primaveraSound.jpg",
        },
  

      ],
    },
    
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      direction="horizontal"
      spaceBetween={10}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      // scrollbar={{ draggable: true }}
      modules={[Pagination, Mousewheel]}
      className="h-full"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-rows-2 gap-4 h-max pb-10 ">
              {slide.works.map((work, index) => {
                return (
                  <div
                    className="relative overflow-hidden rounded-lg flex items-center justify-center group aspect-video "
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      
                        <Image
                          className="w-full"
                          key={index}
                          src={work.path}
                          width={500}
                          height={100}
                          alt=""
                        />
                        <div className="absolute inset-0 bg-accent/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 "></div>
                        
                        <div className="absolute flex flex-col transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-[100%] ">
                          <div className="flex justify-center items-center gap-x-2 text-lg tracking-wide ">
                            
                            <div className=" -translate-x-[120%] group-hover:-translate-x-0 text-2xl transition-all duration-300">{work.title}</div>
                            <div className="text-xl translate-x-[120%] group-hover:translate-x-0  transition-all duration-300">
                              <BsArrowRight />
                            </div>
                          
                          </div>
                          <div className="flex flex-col items-center gap-x-2 text-lg tracking-wide pt-6 ">
                            
                            <div className=" translate-y-[120%] group-hover:translate-y-0 transition-all duration-300">Stack utilizado</div>
                            <div className=" translate-y-[120%] group-hover:translate-y-0 transition-all duration-500 ">iconos del stack</div> {/*  // buscar en react-icons */}
                                         
                          </div>
                        </div>
                        
                     
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
