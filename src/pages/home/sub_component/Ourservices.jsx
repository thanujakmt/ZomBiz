
import planning from "/images/service/service1.png"
import consultancy from "/images/service/service2.png"
import finance from "/images/service/service3.png"
import riskmanagement from "/images/service/service4.png"
import expertadvisers from "/images/service/service5.png"
import customerservice from "/images/service/service6.png"
import { servicesData } from "../../../data/home_data/ServicesData"
import Service from "./Service"

function Ourservices() {
    return (
        <>
            <div className="main container border- flex justify-center items-center flex-col">
                <div className="ourservice border- flex flex-col justify-center items-center py-[10px]">
                    <h1 className="text-[30px] font-serif text-light_gary font-[700]">Our Services</h1>
                    <p className="text-gray text-center p-6 font-po text-[18px] 2xl:w-[1000px]">Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="services lg:w-[90%] w-full flex flex-wrap items-center justify-center gap-3 py-[10px]">

                        {
                            servicesData.map((item) =>{
                                return <Service key={item.id} data= {item} />
                            })
                        }
                 
                </div>
            </div>
        </>
    )
}

export default Ourservices