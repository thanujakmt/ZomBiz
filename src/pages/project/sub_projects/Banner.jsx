
function Banner() {
    return (
        <>
            <div className="servicebanner">
                <img src="/images/project/project-banner.jpg" className=" relative h-96 w-full md:h-[490px] mt-[-50px]" alt="" />
                <div className=' bg-bg_color absolute top-36 h-[400px] w-full z-10 md:h-[458px] md:mt-[-10px] flex flex-col justify-center items-center text-white'>
                    <div className=' font-serif text-5xl font-semibold'>Projects</div>
                    <div className=' font-serif text-xl font-[100]'>Home // Projects</div>
                </div>
            </div>
        </>
    )
}

export default Banner