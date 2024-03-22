
import team from "/images/team/team.jpg"
import team1 from "/images/team/team2.jpg"
import team2 from "/images/team/team3.jpg"
import { ExpertData } from "../../../data/home_data/ExpertData"
import ExpertsTeam from "./ExpertsTeam"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';

function ExpertTeam() {
    return (
        <>
            <div className="h-[800px] w-full bg-light_purple my-10 flex items-center justify-center">
                <div className="container border-  2xl:px-32">
                    <div className="text text-white flex flex-col pl-[20px] mb-10 justify-left items-left gap-5 md:my-5 md:mb-20">
                        <div className="heading">
                            <h1 className="text-[2em] font-serif font-[600]">Our Expert Team</h1>
                        </div>
                        <div className="para md:text-lg text-left">
                            <p>Pallamco laboris nisi ut aliquip ex ea commodo <br /> consequat.</p>
                        </div>
                    </div>
                    <div className="images_box ">
                        <div className="experts ">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={10}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    '@0.00': {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    '@0.75': {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    '@1.00': {
                                        slidesPerView: 3,
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
                                {
                                    ExpertData.map((item) => {
                                        return <SwiperSlide><ExpertsTeam key={item.id} data={item} /></SwiperSlide>
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpertTeam