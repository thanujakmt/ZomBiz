
import { FaRegCircle } from "react-icons/fa6";

function Vissionmission() {
    return (
        <>
            <div className=" flex  justify-center items-center md:mb-[100px]">
                <div className=" container flex justify-center flex-col lg:flex-row gap-8">
                    <div className=" flex flex-col items-center lg:w-[600px] px-5">
                        <div className="content mb-10">
                            <div className="heading m-2">
                                <h1 className=" text-3xl font-serif text-light_gary font-semibold">Vision And Mission</h1>
                            </div>
                            <div className="para m-2">
                                <p className=" text-gray text-[1em] font-sm leading-7">Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod tempor incidd ut labore rhei et dolore magna aliqua. Ut enim ad veniam, quis laboris nisi ut aliquip ex ea commodo. Duis aute irure dolor in repre voluptate in the velit esse.</p>
                            </div>
                        </div>
                        <div>
                            <ul className=" flex flex-col gap-6">
                                <li className=" flex gap-4">
                                    <FaRegCircle className=' text-3xl text-purple' />
                                    <div className=" m-1 text-gray text-[0.9em]">Duis aute irure dolor in reprehenderit in the voluptate velit esse cillum dolore eu ugiat nulla pariatur cupiat non proident.</div>
                                </li>
                                <li className=" flex gap-4">
                                    <FaRegCircle className=' text-3xl text-purple' />
                                    <div className=" m-1 text-gray text-[0.9em]">Duis aute irure dolor in reprehenderit in the voluptate velit esse cillum dolore eu ugiat nulla pariatur cupiat non proident.</div>
                                </li>
                                <li className=" flex gap-4">
                                    <FaRegCircle className=' text-3xl text-purple' />
                                    <div className=" m-1 text-gray text-[0.9em]">Duis aute irure dolor in reprehenderit in the voluptate velit esse cillum dolore eu ugiat nulla pariatur cupiat non proident.</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="m-5">
                        <img src="/images/about/ab2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Vissionmission;