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
            scrollbar={{ draggable: true }}
            modules={[Pagination, Scrollbar]}
            className="h-[280px] sm:h-[480px]"
        >
            {workSlider.slides.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                      {slide.images.map((image, index) => {
                        return (
                        <div>
                          <div>
                            <Image key={index} src={image.path} width={500} height={300} alt='' />
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
