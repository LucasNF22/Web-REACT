import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
                    title: "title",
                    path: "/thumb2.jpg",
                },
                {
                    title: "title",
                    path: "/thumb3.jpg",
                },
                {
                    title: "title",
                    path: "/thumb4.jpg",
                },
            ],
        },
        {
            images: [
                {
                    title: "title",
                    path: "/thumb4.jpg",
                },
                {
                    title: "title",
                    path: "/thumb1.jpg",
                },
                {
                    title: "title",
                    path: "/thumb2.jpg",
                },
                {
                    title: "title",
                    path: "/thumb3.jpg",
                },
            ],
        },
    ],
};

const WorkSlider = () => {
    return (
        <Swiper
       
            spaceBetween={10}
            pagination={{
              clickable: true
            }}
            // scrollbar={{ draggable: true }}
            modules={[Pagination]}
            className="h-[280px] sm:h-[480px]"
        >
            {workSlider.slides.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4" >
                      {slide.images.map((image, index) => {
                        return (
                        <div className="relative rounded-lg overflow-hidden flex items-center justify-center group " key={index}>
                            <div className="flex items-center justify-center relative overflow-hidden group object-cover">
                                <Image key={index} src={image.path} width={500} height={300} alt='' />
                                <div 
                                    className="absolute inset-0 
                                        bg-gradient-to-l from-transparent via-[#1275bb] to-[#c9e8fa] 
                                        opacity-0 group-hover:opacity-80 transition-all duration-500">
                                </div>
                                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                        <div className="delay-100">
                                            titulo 1
                                        </div>
                                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150" >
                                            titulo 2
                                        </div>
                                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                            <BsArrowRight/>
                                        </div>
                                    </div>                 
                                </div>
                            </div>
                        </div>)
                      })}
                    </div>
                  </SwiperSlide>)
            })}
        </Swiper>
    );
};

export default WorkSlider;
