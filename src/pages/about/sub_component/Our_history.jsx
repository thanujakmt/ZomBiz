
import { FaRegCircle } from "react-icons/fa6";

function Ourhistory(){
    return(
        <>
            <div className=' flex justify-center items-center lg:my-[100px]'>
                <div className='container flex flex-col lg:flex-row lg:justify-center lg:mx-10 justify-center'>
                    <div className="image_box m-4">
                        <img src="/images/about/ab1.jpg" alt="" />
                    </div>
                    <div className="content flex flex-col md:w-[700px] md:px-10 2xl:px-20">
                        <div>
                            <div className="heading">
                                <h1 className=' font-serif text-[2.2em] font-semibold text-light_gary p-2'>Our History</h1>
                            </div>
                            <div>
                                <p className=' text-gray p-2 text-[16px] font-[400] font-sans leading-7	'>Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod tempor incidd ut labore rhei et dolore magna aliqua. Ut enim ad veniam, quis laboris nisi ut aliquip ex ea commodo. Duis aute irure dolor in repre voluptate in the velit esse.</p>
                            </div>
                        </div>
                        <div className=' p-2 py-10'>
                            <ul className=' flex flex-col gap-10'>
                                <li className=' flex gap-6'>
                                   <span className='text-light_gary font-[700] font-serif'>2045</span> 
                                   <FaRegCircle className=' text-xl text-purple font-[900] ml-[48px] absolute' />
                                   <div className=' border-l text-gray relative top-5 ml-0.5 h-20'></div>
                                   <p className=' text-gray text-[0.9em]'>Duis aute irure dolor in reprehenderit in the voluptate velit esse cillum dolore eu ugiat nulla pariatur cupiat non proident.</p>
                                </li>
                                <li className=' flex gap-6 mt-[-20px]'>
                                   <span className='text-light_gary font-[700] font-serif'>2045</span> 
                                   <FaRegCircle className=' text-xl text-purple font-[900] ml-[48px] absolute' />
                                   <div className=' border-l text-gray relative top-5 ml-0.5 h-20'></div>
                                   <p className=' text-gray text-[0.9em]'>Duis aute irure dolor in reprehenderit in the voluptate velit esse cillum dolore eu ugiat nulla pariatur cupiat non proident.</p>
                                </li>
                                <li className=' flex gap-6 mt-[-20px] '>
                                   <span className='text-light_gary font-[700] font-serif'>2045</span> 
                                   <FaRegCircle className=' text-xl text-purple font-[900] ml-[48px] absolute' />
                                   <div className=' border-l text-gray relative top-5 ml-0.5 h-20'></div>
                                   <p className=' text-gray text-[0.9em]'>Duis aute irure dolor in reprehenderit in the voluptate velit esse cillum dolore eu ugiat nulla pariatur cupiat non proident.</p>
                                </li>
                                <li className=' flex gap-6 mt-[-20px] '>
                                   <span className='text-light_gary font-[700] font-serif'>2045</span> 
                                   <FaRegCircle className=' text-xl text-purple font-[900] ml-[48px] absolute' />
                                   <div className='  text-gray relative top-5 ml-0.5 h-20'></div>
                                   <p className=' text-gray text-[0.9em]'>Duis aute irure dolor in reprehenderit in the voluptate velit esse cillum dolore eu ugiat nulla pariatur cupiat non proident.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourhistory