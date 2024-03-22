
import about from "/images/about/about-part.jpg"

function Aboutus() {
    return (
        <>
            <div className="bg-very_light_blue w-full flex flex-col justify-center items-center border- m-10 p-4">
                <div className="aboutus container py-[100px] md:flex md:justify-center md:items-center">
                    <div className="text md:w-[550px]">
                        <div className="heading py-8">
                            <h1 className="font-serif text-light_gary text-[30px] md:text-[40px] font-[700]">About Us</h1>
                        </div>
                        <div className="content">
                            <p className="po pb-8 text-gray text-[1.1em] md:text-[1.3em] 2xl:text-[1.1em]"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, recusandae modi! Explicabo, velit corrupti, ea ab dolor obcaecati blanditiis quis deleniti aut ratione dolorem adipisci dignissimos accusamus? Possimus, facilis sapiente </p>
                        </div>
                        <div className="learnmore mb-8 h-[50px] w-[150px] text-center flex justify-center items-center text-white bg-purple hover:border-[1px] hover:border-purple hover:bg-white hover:text-purple">
                            <h5><a href="">LEARN MORE</a></h5>
                        </div>
                    </div>
                    <div className="image_box m:p-5 md:mt-[100px]">
                        <div className=" md:h-[300px] md:w-[350px] md:shadow-md md:absolute"></div>
                        <img src={about} className="h-70 lg:h-[300px] shadow-xl relative md:left-[15px] md:top-[-30px]"  alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus