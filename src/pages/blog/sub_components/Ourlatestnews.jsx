
import { IoIosLink } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

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
                    <div className=" 2xl:flex 2xl:ustify-center 2xl:gap-5">
                        <div className=" md:grid md:grid-cols-2 2xl:grid-cols-2 gap-5">
                            <div className="blogs shadow-2xl w-[360px]  ">
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
                            <div className="blogs shadow-2xl w-[360px] ">
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
                            <div className="blogs shadow-2xl w-[360px] ">
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
                            <div className="blogs shadow-2xl w-[360px]  ">
                                <div className="image_opacity"></div>
                                <div className="icon absolute mt-[-100px] z-10">
                                    <IoIosLink className=" text-[1.5em] text-white" />
                                </div>
                                <div className="image relative">
                                    <img src="/images/blog/bl5.jpg" className="" alt="" />
                                </div>
                                <div className=" m-5 flex flex-col gap-4 text-light_gary">
                                    <h1 className=" font-serif italic font-semibold">The Pros and Cons of Starting an Online <br /> Consulting Business</h1>
                                    <p className=" text-[0.7em]">Posted By: <span className=" text-light_purple">Mick Steven</span> // On <span className=" text-light_purple">12th June, 2045</span> 12th June, 2045</p>
                                </div>
                            </div>
                            <div className="blogs shadow-2xl w-[360px] ">
                                <div className="image_opacity"></div>
                                <div className="icon absolute mt-[-100px] z-10">
                                    <IoIosLink className=" text-[1.5em] text-white" />
                                </div>
                                <div className="image relative">
                                    <img src="/images/blog/bl4.jpg" className="" alt="" />
                                </div>
                                <div className=" m-5 flex flex-col gap-4 text-light_gary">
                                    <h1 className=" font-serif italic font-semibold">The Pros and Cons of Starting an Online <br /> Consulting Business</h1>
                                    <p className=" text-[0.7em]">Posted By: <span className=" text-light_purple">Mick Steven</span> // On <span className=" text-light_purple">12th June, 2045</span> 12th June, 2045</p>
                                </div>
                            </div>
                            <div className="blogs shadow-2xl w-[360px] ">
                                <div className="image_opacity"></div>
                                <div className="icon absolute mt-[-100px] z-10">
                                    <IoIosLink className=" text-[1.5em] text-white" />
                                </div>
                                <div className="image relative">
                                    <img src="/images/blog/bl6.jpg" className="" alt="" />
                                </div>
                                <div className=" m-5 flex flex-col gap-4 text-light_gary">
                                    <h1 className=" font-serif italic font-semibold">The Pros and Cons of Starting an Online <br /> Consulting Business</h1>
                                    <p className=" text-[0.7em]">Posted By: <span className=" text-light_purple">Mick Steven</span> // On <span className=" text-light_purple">12th June, 2045</span> 12th June, 2045</p>
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col px-5 py-5">
                            <div className=" p-1 mb-5">
                                <div className=" mb-6 relative">
                                    <input type="text" placeholder="Search" className=" border-gray border outline-none text-gray text-[1.2em] font-medium rounded-[3px] py-1 px-2" />
                                    <div className=" absolute md:right-[370px] md:top-3 2xl:top-2 2xl:right-2 text-[1.2em] text-gray"><IoSearch /></div>
                                </div>
                                <div>
                                    <h1 className=" my-7 text-light_gary text-[1.3em] font-medium">Categories</h1>
                                    <ul className=" flex flex-col gap-4  text-gray">
                                        <li className="hover:text-purple cursor-pointer hover:ml-3 transition-all ease-in-out duration-1000"> All</li>
                                        <li className="hover:text-purple cursor-pointer hover:ml-3 transition-all ease-in-out duration-1000"> Busisness</li>
                                        <li className="hover:text-purple cursor-pointer hover:ml-3 transition-all ease-in-out duration-1000"> Consultency</li>
                                        <li className="hover:text-purple cursor-pointer hover:ml-3 transition-all ease-in-out duration-1000"> Corporate</li>
                                        <li className="hover:text-purple cursor-pointer hover:ml-3 transition-all ease-in-out duration-1000"> Politics</li>
                                        <li className="hover:text-purple cursor-pointer hover:ml-3 transition-all ease-in-out duration-1000"> Marketing</li>
                                        <li className="hover:text-purple cursor-pointer hover:ml-3 transition-all ease-in-out duration-1000"> Lifestyle</li>
                                    </ul>
                                </div>
                            </div>
                            <div className=" flex flex-col mb-5 gap-8">
                                <h1 className=" text-light_gary text-[1.3em] font-medium">Related News</h1>
                                <div className=" flex gap-5">
                                    <img src="/images/blog/rp1.jpg" alt="" />
                                    <div className=" flex flex-col gap-2">
                                        <div className=" text-light_gary">CFOs Focused On Retaining <br/> Key Talent</div>
                                        <span className=" text-[0.8em] text-gray">25th Feb, 2045</span>
                                    </div>
                                </div>
                                <div className=" flex gap-5">
                                    <img src="/images/blog/rp2.jpg" alt="" />
                                    <div className=" flex flex-col gap-2">
                                        <div className=" text-light_gary">Accenture Acquires For The <br/> Unclosed Sum</div>
                                        <span className=" text-[0.8em] text-gray">25th Feb, 2045</span>
                                    </div>
                                </div>
                                <div className=" flex gap-5">
                                    <img src="/images/blog/rp3.jpg" alt="" />
                                    <div className=" flex flex-col gap-2">
                                        <div className=" text-light_gary">Startup Investments Drop <br/> On Venturing Rises</div>
                                        <span className=" text-[0.8em] text-gray">25th Feb, 2045</span>
                                    </div>
                                </div>
                            </div>    
                            <div>
                                <h1 className="text-light_gary text-[1.3em] font-medium my-5 mx-1">Archives</h1>
                                <ul className=" flex flex-col gap-5 text-gray">
                                    <li className=" flex items-center cursor-pointer hover:text-purple hover:ml-5 transition-all ease-in-out duration-1000"> <IoIosArrowForward /> November 2045</li>
                                    <li className=" flex items-center cursor-pointer hover:text-purple hover:ml-5 transition-all ease-in-out duration-1000"> <IoIosArrowForward /> October 2045</li>
                                    <li className=" flex items-center cursor-pointer hover:text-purple hover:ml-5 transition-all ease-in-out duration-1000"> <IoIosArrowForward /> September 2045</li>
                                    <li className=" flex items-center cursor-pointer hover:text-purple hover:ml-5 transition-all ease-in-out duration-1000"> <IoIosArrowForward /> August 2045</li>
                                    <li className=" flex items-center cursor-pointer hover:text-purple hover:ml-5 transition-all ease-in-out duration-1000"> <IoIosArrowForward /> July 2045</li>
                                    <li className=" flex items-center cursor-pointer hover:text-purple hover:ml-5 transition-all ease-in-out duration-1000"> <IoIosArrowForward /> June 2045</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="text-light_gary text-[1.3em] font-medium my-6 mx-1">Popular Tags</h1>
                                <div className=" my-3">
                                    <span className=" border p-1 m-1 text-[0.8em] cursor-pointer hover:text-purple transition-all ease-in-out duration-500">Business</span>
                                    <span className=" border p-1 m-1 text-[0.8em] cursor-pointer hover:text-purple transition-all ease-in-out duration-500">Consultency</span>
                                    <span className=" border p-1 m-1 text-[0.8em] cursor-pointer hover:text-purple transition-all ease-in-out duration-500">Market</span>
                                </div>
                                <div className=" my-3">
                                    <span className=" border p-1 m-1 text-[0.8em] cursor-pointer hover:text-purple transition-all ease-in-out duration-500">Sales</span>
                                    <span className=" border p-1 m-1 text-[0.8em] cursor-pointer hover:text-purple transition-all ease-in-out duration-500">Corporate</span>
                                    <span className=" border p-1 m-1 text-[0.8em] cursor-pointer hover:text-purple transition-all ease-in-out duration-500">Politics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" 2xl:pt-20 2xl:ml-80 my-10">
                        <ul className=" flex gap-8 text-[1.2em]">
                            <li className=" border md:px-4 md:py-2 px-2 text-white bg-purple ">1</li>
                            <li className=" border md:px-4 md:py-2 px-2 text-gray">2</li>
                            <li className=" border md:px-4 md:py-2 px-2 text-gray">3</li>
                            <li className=" flex justify-center items-center">
                                <span className="text-gray">Next </span>
                                <span className="text-gray"><IoIosArrowForward /></span> 
                            </li>
                        </ul>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Ourlatestnews