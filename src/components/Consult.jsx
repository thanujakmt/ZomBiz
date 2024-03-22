
import banner1 from "/images/banner/banner1.jpg"
import banner2 from "/images/banner/banner2.jpg"
import { GrNext } from "react-icons/gr";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Consult() {
    
    const navbarRef = useRef(null);

    return (
        <>
            <div ref={navbarRef} className="banner max-w-full relative">
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, EffectFade, Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="banner1 ">
                            <img src={banner1} className="h-[800px] object-cover w-full" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="baneer2">
                            <img src={banner2} className="h-[800px] object-cover w-full" alt=""/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="bg-bg_color h-[800px] absolute top-[208px] md:top-[150px] md:w-full z-10">
                <div className="content font-serif mt-20 z-[999] p-3 2xl:ml-[220px] container flex flex-col justify-center ">
                    <h1 className="heading text-[35px] font-[500] py-3 text-white md:text-[4em] 2xl:text-[4em]">Consult Your <br/> Business</h1>
                    <p className="text-[1.2em] pt-1 text-white z-50 md:text-[2em] md:w-[700px] 2xl:w-[900px] 2xl:text-[2em]">We are the unique Consultancy Farm for your business solution, That is ready to take challenge and knockout your business problems.</p>
                    <div className="buttons flex flex-col lg:flex-row m-4">
                        <button type="button" className="text-blue_voilet font-semibold bg-white h-[50px] hover:bg-transparent hover:text-white hover:border-[1px] text-lg hover:border-white w-[210px] m-2 md:w-[230px]  md:text-[1.3em] transition-all ease-in-out duration-500">GET STARTED</button>
                        <button type="button" className="text-blue_voilet font-semibold bg-white h-[50px] hover:bg-transparent hover:text-white hover:border-[1px] text-lg hover:border-white w-[210px] m-2 md:w-[230px]  md:text-[1.3em] transition-all ease-in-out duration-500">EXPLORE MORE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Consult