

function Service(props) {
    return (
        <>
            <div className="planning p-4 gap-5 w-80 md:w-[240px] cursor-pointer lg:w-[300px] xl:w-[350px] max-h-[350px] min-h-[350px] flex flex-col justify-center items-center py-6 hover:shadow-xl transition-all duration-500 ease-linear">
                <div className="image_box ">
                    <img src={props.data.icon} alt="icon" />
                </div>
                <div className="heading ">
                    <h1 className="text-[1.4em] text-light_gary text-center font-serif">{props.data.title}</h1>
                </div>
                <div className="para">
                    <p className="text-gray  text-center font-po px-5 text-[18px]">{props.data.content}</p>
                </div>
                <div className="learnmore ">
                    <h2><a href="" className="text-purple text-[18px]">Learn More</a></h2>
                </div>
            </div>
        </>
    )
}

export default Service