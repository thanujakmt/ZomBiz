
function Bannerservice(){
    return(
        <>
            <div className="servicebanner">
                <img src="/images/service/service-banner.jpg" className=" relative h-96 w-full md:h-[500px] mt-[-50px]" alt="" />
                <div className=' bg-bg_color absolute top-36 h-[400px] w-full z-10 md:h-[458px]  flex flex-col justify-center items-center text-white'>
                    <div className=' font-serif text-5xl font-semibold'>Service</div>
                    <div className=' font-serif text-xl font-[100]'>Home // Service</div>
                </div>
            </div>
        </>
    )
}

export default Bannerservice