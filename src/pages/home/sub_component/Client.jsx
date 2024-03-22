
import client1 from "/images/client/testimonial1.jpg"
import { ClientData } from "../../../data/home_data/ClientsData";
import Clientsays from "../../../../../zombiz/src/sub_client_components/Clientsays";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

function Client() {

    return (
        <>
            <div className="client bg-very_light_blue lg:my-[100px] w-[370px] md:w-[800px] lg:w-[1000px] xl:w-[1280px]  2xl:w-[1800px] py-20 gap-10 ">
                <div className="heading">
                    <h1 className="md:text-4xl text-2xl text-center font-serif font-semibold text-light_gary">What Our Client Say About Us</h1>
                </div>
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                  >
                {
                    ClientData.map((item) => {
                        return <SwiperSlide><Clientsays key={item.id} data={item} /></SwiperSlide>
                    })
                }
                </Swiper>
            </div>
        </>
    )
}

export default Client