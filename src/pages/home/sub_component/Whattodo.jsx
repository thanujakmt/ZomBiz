
export default function Whattodo(props) {
    return (
        <>
            <div className="consultancy text-center p-8 w-[300px] md:w-[240px]  lg:w-[300px] 2xl:w[350px] 2xl:m-10 flex flex-col rounded-[10px] justify-center items-center m-2 shadow-md hover:shadow-2xl transition-all duration-500 ease-linear">
                <div className="image_box m-2 my-4">
                    <img src={props.data.icon} alt="" />
                </div>
                <div className="heading my-4">
                    <h2><a href="" className="font-serif text-2xl text-light_gary md:text-[1.2em] lg:text-2xl">{props.data.title}</a></h2>
                </div>
                <div className="comment w-48">
                    <p className="text-gray">{props.data.content}</p>
                </div>
            </div>
        </>
    )
}