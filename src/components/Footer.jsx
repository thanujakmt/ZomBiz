
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "/images/logo/logo.png"

function Footer() {

    return (
        <>
            <div className=" lg:h-[500px] w-full bg-navy_blue flex justify-center items-center">
                <div className="container h-full grid lg:grid-cols-4 md:grid-cols-2 md:mx-10 2xl:mx-[300px]">
                    <div className="zombiz lg:m-14 p-5 flex flex-col justify-center gap-8">
                        <div className="text-white">
                            <img src={logo} alt="" />
                        </div>
                        <div className="content w-56 text-gray">
                            <p>Lorem ipsum dolor sit amt conetur adcing elit. Sed do eiusod tempor utslr. Ut laboris nisi ut aute irure dolor in rein velit esse.</p>
                        </div>
                        <div>
                            <ul className="flex">
                                <li className="text-left mr-5 cursor-pointer bg-gray px-2 py-1 rounded hover:bg-white"><FaFacebookF className='' /></li>
                                <li className="text-left mr-5 cursor-pointer bg-gray px-2 py-1 rounded hover:bg-white"><FaGooglePlusG className=' text-xl' /></li>
                                <li className="text-left mr-5 cursor-pointer bg-gray px-2 py-1 rounded hover:bg-white"><FaLinkedinIn className='' /></li>
                                <li className="text-left mr-5 cursor-pointer bg-gray px-2 py-1 rounded hover:bg-white"><FaTwitter className='' /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="uselinks text-white flex flex-col p-5 md:pt-11 lg:items-center justify-center gap-5 lg:pt-8">
                        <div className="heading ">
                            <h1 className=" text-[1.4em] font-serif">Useful Links</h1>
                        </div>
                        <ul className=" flex flex-col gap-5 text-gray">
                            <li className=" cursor-pointer hover:text-white hover:tracking-widest transition-all ease-in-out duration-500">Home</li>
                            <li className=" cursor-pointer hover:text-white hover:tracking-widest transition-all ease-in-out duration-500">About</li>
                            <li className=" cursor-pointer hover:text-white hover:tracking-widest transition-all ease-in-out duration-500">Service</li>
                            <li className=" cursor-pointer hover:text-white hover:tracking-widest transition-all ease-in-out duration-500">Portfolio</li>
                            <li className=" cursor-pointer hover:text-white hover:tracking-widest transition-all ease-in-out duration-500">Blog</li>
                            <li className=" cursor-pointer hover:text-white hover:tracking-widest transition-all ease-in-out duration-500">Contact Us</li>
                        </ul>
                    </div>
                    <div className="news h-full flex flex-col justify-center p-5 lg:items-center gap-5">
                        <div className="heading text-white text-left">
                            <h1 className="text-[1.4em] lg:ml-[-60px] xl:ml-[-100px] 2xl:ml-[-85px] font-serif">From The News</h1>
                        </div>
                        <div className="text-gray flex flex-col gap-2 ">
                            <a className=" text-[1.1em] cursor-pointer hover:text-purple">The Pros and Cons of Starting <br /> an Online Business.</a>
                            <span className=" text-[0.9em]">12th June 2045</span>
                        </div>
                        <hr className="text-gray" />
                        <div className="text-gray flex flex-col gap-2">
                            <a className=" text-[1.1em] cursor-pointer hover:text-purple">The Pros and Cons of Starting <br /> an Online Business.</a>
                            <span className=" text-[0.9em]">12th June 2045</span>
                        </div>
                    </div>
                    <div className="ournewsletter lg:px-10 h-full flex flex-col  p-5 gap-5 justify-center 2xl:mt-[-40px]">
                        <div className="heading">
                            <h1 className=" text-white text-[1.4em] font-serif">Our Newsletter</h1>
                        </div>
                        <div>
                            <p className=" text-gray text-[1.1em]">Subscribe to our newsletter to get the latest News and offers..</p>
                        </div>
                        <div className="email flex">
                            <input type="email" name="" id="" placeholder="Email Address" className=" lg:w-[120px] w-40 py-2 px-2 outline-none" />
                            <button className="text-white bg-purple py-2 w-14">Go</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-very_dark_navy_blue w-full h-20 flex justify-center items-center p-5 ">
                <div className=" container flex-col flex md:flex-row gap-1 justify-between 2xl:mx-[350px]">
                    <div>
                        <p className=" text-gray">© 2045 All Rights Reserved | Developed by : <a href="" className=" text-purple">Thanuja K M</a> </p>
                    </div>
                    <div>
                        <ul className="flex gap-5 text-gray">
                            <li className=" cursor-pointer">Legal</li>
                            <li className=" cursor-pointer">Sitemap</li>
                            <li className=" cursor-pointer">Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="h-32 w-full flex items-center justify-end px-5 sticky bottom-0 z-50" onClick={scrollToNavbar} >
                <div  className=" text-4xl bg-purple text-white rounded-[5px] hover:rounded-[35px] transition-all ease-in-out duration-500" >
                    <MdKeyboardDoubleArrowUp />
                </div>
            </div> */}
        </>
    )
}

export default Footer