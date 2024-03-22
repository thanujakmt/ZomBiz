
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';

function Clientswithlogo() {
    return (
        <>
            <div className="clientslog bg-purple w-full flex items-center justify-center mb-[80px]">
                <div className="container flex items-center justify-center">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        '@0.75': {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        '@1.50': {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                        <SwiperSlide>
                            <div className="imagebox">
                                <img src="/images/client/client1.png" className="my-[70px] mx-[px] md:mx-[50px]" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imagebox">
                                <img src="/images/client/client2.png" className="my-[70px] mx-[px] md:mx-[50px]" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imagebox">
                                <img src="/images/client/client3.png" className="my-[70px] mx-[px] md:mx-[50px]" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imagebox">
                                <img src="/images/client/client4.png" className="my-[70px] mx-[px] md:mx-[50px]" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imagebox">
                                <img src="/images/client/client5.png" className="my-[70px] mx-[px] md:mx-[50px]" alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Clientswithlogo