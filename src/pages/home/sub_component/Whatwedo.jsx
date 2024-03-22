
import consultancy from "/images/home/consultency.png"
import busisness from "/images/home/busisness_grow.png"
import support from "/images/home/support-logo.png"
import { WhatwedoData } from "../../../data/home_data/WhatwedoData"
import Whattodo from "./Whattodo"

function Whatwedo() {
    return (
        <>
            <div className="2xl:container flex flex-col justify-center items-center md:flex md:flex-col md:justify-center md:items-center">
                <div className="whatwedo flex flex-col justify-center items-center my-[60px] mx-[10px] ">
                    <h1 className="text-[2em] font-semibold font-serif text-light_gary my-6 ">What We Do</h1>
                    <p className="text-gray po text-center text-[1.1em] md:w-[600px] md:text-[1.3em] 2xl:w-[1000px] 2xl:text-[1.2em]">Pallamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className="md:flex md:m-4 ">
                    {
                        WhatwedoData.map((item) =>{
                            return <Whattodo key={item.id} data= {item}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Whatwedo