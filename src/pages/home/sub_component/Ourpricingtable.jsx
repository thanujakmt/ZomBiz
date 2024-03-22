
import Pricing from "./Pricing"
import { Pricingdata } from "../../../data/home_data/Pricingdata"

function Ourpricingtable() {
    return (
        <>
            <div className="pricing my-[100px]">
                <div className="text flex flex-col items-center gap-8 justify-center">
                    <div className="heading">
                        <h1 className=" text-3xl font-semibold text-light_gary font-serif">Our Pricing Table</h1>
                    </div>
                    <div className="para">
                        <p className=" text-gray text-center mx-10 2xl:mx-96 lg:mx-40 lg:text-xl 2xl:text-[1.2em]">Pallamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="prices min-h-[500px] min-w-[300px] transition-all ease-in-out duration-700 md:grid md:grid-cols-2 2xl:grid 2xl:grid-cols-4 gap-8">
                        {
                            Pricingdata.map((item) => {
                                return <Pricing key = {item.id} data = {item}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourpricingtable