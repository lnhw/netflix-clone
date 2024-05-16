"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { A11y, Navigation } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
    className?: string;
    children: React.ReactNode;
    sm: number;
    md: number;
    lg: number;
}
export const Carousel: React.FC<Props> = ({ className, children, sm, md, lg }) => {
    const swiperRef = useRef<SwiperType>();;
    return (
        <div className="flex flex-row">
            <button className="h-full bg-transparent cursor-pointer hover:bg-black"
                onClick={() => swiperRef.current?.slidePrev()} >
                <ChevronLeft color="white" size={30} />
            </button>
            <Swiper
                className={className}
                modules={[Navigation, A11y]}
                slidesPerView={sm}
                spaceBetween={1}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    768: {
                        slidesPerView: md,
                        spaceBetween: 2
                    },
                    1024: {
                        slidesPerView: lg,
                        spaceBetween: 4,
                    },
                }}
            >

                {React.Children.map(children, (child, index) => (
                    <SwiperSlide key={index}>
                        <>{child}</>
                    </SwiperSlide>
                ))}

            </Swiper>
            <button className="h-full bg-transparent cursor-pointer hover:bg-black"
                onClick={() => swiperRef.current?.slideNext()}
            >
                <ChevronRight color="white" size={30} />
            </button>
        </div>
    );
}