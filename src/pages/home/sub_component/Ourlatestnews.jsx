
import { IoIosLink } from "react-icons/io";


function Ourlatestnews() {
    return (
        <>
            <div className="ournews lg:my-[100px] container">
                <div className="text flex flex-col items-center justify-center gap-10 lg:my-[50px]">
                    <div className="heading">
                        <h1 className=" text-4xl text-light_gary font-serif font-[600]">Our Latest News</h1>
                    </div>
                    <div className="para">
                        <p className=" text-gray mx-5 md:mx-20 md:text-xl lg:mx-[200px] text-center">Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
                <div className="news flex flex-col justify-center items-center md:grid py-[50px]">
                    <div className=" md:grid md:grid-cols-2 2xl:grid-cols-3 gap-5">
                        <div className="blogs shadow-2xl w-[360px] my-10 ">
                            <div className="image_opacity"></div>
                            <div className="icon absolute mt-[-100px] z-10">
                                <IoIosLink className=" text-[1.5em] text-white" />
                            </div>
                            <div className="image relative">
                                <img src="/images/blog/bl1.jpg" className="" alt="" />
                            </div>
                            <div className=" m-5 flex flex-col gap-4 text-light_gary">
                                <h1 className=" font-serif italic font-semibold">The Pros and Cons of Starting an Online <br /> Consulting Business</h1>
                                <p className=" text-[0.7em]">Posted By: <span className=" text-light_purple">Mick Steven</span> // On <span className=" text-light_purple">12th June, 2045</span> 12th June, 2045</p>
                            </div>
                        </div>
                        <div className="blogs shadow-2xl w-[360px] my-10">
                            <div className="image_opacity"></div>
                            <div className="icon absolute mt-[-100px] z-10">
                                <IoIosLink className=" text-[1.5em] text-white" />
                            </div>
                            <div className="image relative">
                                <img src="/images/blog/bl2.jpg" className="" alt="" />
                            </div>
                            <div className=" m-5 flex flex-col gap-4 text-light_gary">
                                <h1 className=" font-serif italic font-semibold">The Pros and Cons of Starting an Online <br /> Consulting Business</h1>
                                <p className=" text-[0.7em]">Posted By: <span className=" text-light_purple">Mick Steven</span> // On <span className=" text-light_purple">12th June, 2045</span> 12th June, 2045</p>
                            </div>
                        </div>
                        <div className="blogs shadow-2xl w-[360px] my-10">
                            <div className="image_opacity"></div>
                            <div className="icon absolute mt-[-100px] z-10">
                                <IoIosLink className=" text-[1.5em] text-white" />
                            </div>
                            <div className="image relative">
                                <img src="/images/blog/bl3.jpg" className="" alt="" />
                            </div>
                            <div className=" m-5 flex flex-col gap-4 text-light_gary">
                                <h1 className=" font-serif italic font-semibold">The Pros and Cons of Starting an Online <br /> Consulting Business</h1>
                                <p className=" text-[0.7em]">Posted By: <span className=" text-light_purple">Mick Steven</span> // On <span className=" text-light_purple">12th June, 2045</span> 12th June, 2045</p>
                            </div>
                        </div>
                    </div>
                    <div className="readmore flex items-center justify-center md:mt-20 ">
                        <a href="" className="w-40 bg-purple text-white px-8 py-4 hover:border hover:border-purple hover:bg-white hover:text-purple">READ MORE</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourlatestnews