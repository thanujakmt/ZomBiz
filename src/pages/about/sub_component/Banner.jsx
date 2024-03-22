
function Banner(){
    return(
        <>
            <div className=' w-full'>
                <img src="/images/about/about-banner.jpg" className='relative h-96 md:w-full md:h-[450px] mt-[-50px]' alt="" />
                <div className=' bg-bg_color absolute top-36 h-[400px] w-full z-10 md:h-[410px] flex flex-col justify-center items-center text-white'>
                    <div className=' font-serif text-5xl font-semibold'>About Us</div>
                    <div className=' font-serif text-xl font-[100]'>Home // About</div>
                </div>
            </div>
        </>
    )
}

export default Banner