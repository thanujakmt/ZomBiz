
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contactus() {
    return (
        <>
            <div className="map bg-[url('/images/footer/map.jpg')] h-[1100px] md:h-[700px] 2xl:h-[850px] w-full  relative flex flex-col items-center justify-center">
                <div className="bg-bg_color2 w-full h-[1100px] flex"></div>
                <div className="container flex justify-center items-center">
                    <div className="text absolute top-5 md:top-20 flex flex-col items-center justify-center gap-5 text-center">
                        <div>
                            <div className="heading text-white">
                                <h1 className=" font-serif text-[2.2em] font-semibold">Contact Us</h1>
                            </div>
                            <div className="para mx-5 lg:text-[1.2em] 2xl:mx-[400px] text-white">
                                <p>Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                        <div className="content md:grid md:grid-cols-2 text-white lg:pt-[50px]">
                            <div className="contactinfo">
                                <ul className="flex items-start flex-col gap-10 lg:gap-[60px]">
                                    <li className=" text-left flex flex-col gap-5">
                                        <h1 className=" text-2xl font-medium">Contact Info</h1>
                                        <p>125, Park street avenue, Brocklyn, Newyork.</p>
                                    </li>
                                    <li className=" text-left flex flex-col gap-5">
                                        <p className=" flex"> <span><FaPhoneAlt className='m-[6px] text-[0.8em]' /></span> +11253678958</p>
                                        <p className=" flex"> <span><MdEmail className='m-1' /></span> info@domain.com</p>
                                    </li>
                                    <li className=" text-left flex flex-col gap-5">
                                        <h1 className=" text-2xl font-medium">Social Partner</h1>
                                        <ul className="flex items-center">
                                            <li className="text-left mr-5 cursor-pointer"><FaFacebookF className='' /></li>
                                            <li className="text-left mr-5 cursor-pointer"><FaGooglePlusG className='text-[1.4em]' /></li>
                                            <li className="text-left mr-5 cursor-pointer"><FaLinkedinIn className='' /></li>
                                            <li className="text-left mr-5 cursor-pointer"><FaTwitter className='' /></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="leaveamsg pt-10 md:pt-0">
                                <div className="heading text-left px-2">
                                    <h1 className=" text-2xl font-medium">Leave Us A Massage Here</h1>
                                </div>
                                <form action="">
                                    <div className=" md:flex md:flex-row flex flex-col">
                                        <input type="text" placeholder="First Name" className=" md:w-[150px] 2xl:w-full md:mx-2 my-3 md:my-4 px-2 py-2 lg:p-5 outline-none text-light_gary" />
                                        <input type="text" placeholder="Last Name" className=" md:w-[150px] 2xl:w-full md:mx-2 my-3 md:my-4 px-2 py-2 lg:p-5 outline-none text-light_gary" />
                                    </div>
                                    <div className=" md:flex md:flex-row flex flex-col">
                                        <input type="email" placeholder="Email" className=" md:mx-2 md:w-[150px] my-3 2xl:w-full md:my-4 px-2 py-2 lg:p-5 outline-none text-light_gary" />
                                        <input type="text" placeholder="Phone" className=" md:mx-2 md:w-[150px] my-3 2xl:w-full md:my-4 px-2 py-2 lg:p-5 outline-none text-light_gary" />
                                    </div>
                                    <div className="my-3 lg:my-5">
                                        <textarea name="" id="" cols="53" placeholder="Message" rows="" className="p-5 md:h-[120px] px-5 outline-none text-light_gary w-80 h-[150px]2xl:h-[200px] 2xl:w-[600px]"></textarea>
                                    </div>
                                    <div className="sendmsg flex items-center justify-end cursor-pointer">
                                        <p className="text-center w-[200px] py-3 mx-3 border-purple bg-purple hover:bg-white hover:text-purple transition-all ease-in-out duration-700">SEND MESSAGE</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="newproject h-52 w-full bg-purple md:flex text-white md:items-center md:justify-center 2xl:gap-40">
                <h1 className="lg:text-[2.2em] text-[1.6em] p-5 font-medium font-po">Want To Start A New Project With Us? Let’s Start!</h1>
                <a href="" className="border px-6 py-2 m-6 lg:m-2 hover:bg-white hover:text-purple transition-all ease-in-out duration-700">START NOW</a>
            </div>
        </>
    )
}

export default Contactus