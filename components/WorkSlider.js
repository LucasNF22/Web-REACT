import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Mousewheel } from "swiper";
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
      images: [
        {
          title: "BlogDeCafe",
          path: "/blogDeCafe.jpg",
        },
        {
          title: "App-clima",
          path: "/appClima.jpg",
        },
        {
          title: "Store FrontEnd",
          path: "/fe-store.jpg",
        },
        {
          title: "Let-Bar",
          path: "/let-bar.jpg",
        },

      ],
    },
    {
      images: [
        {
          title: "BlogDeCafe",
          path: "/blogDeCafe.jpg",
        },
        {
          title: "App-clima",
          path: "/appClima.jpg",
        },
        {
          title: "Store FrontEnd",
          path: "/fe-store.jpg",
        },
        {
          title: "Let-Bar",
          path: "/let-bar.jpg",
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
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group aspect-video"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group ">
                      
                        <Image
                          key={index}
                          src={image.path}
                          width={500}
                          height={100}
                          alt=""
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-l from-transparent via-[#1275bb] to-[#c9e8fa] 
                                    opacity-0 group-hover:opacity-100 transition-all duration-500 "
                        ></div>
                        <div className="absolute bottom-0  group-hover:-translate-y-32 group-hover:md:-translate-y-32 group-hover:xl:-translate-y-32 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            <div className="delay-100">{image.title}</div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              {image.path}
                            </div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
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
