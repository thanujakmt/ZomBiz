

export default function ExpertsTeam(props) {
    return (
        <>
            <div className="relative main  flex justify-center items-center">
                <img src={props.data.image} className=" " alt="" />
                <div className="cursor-pointer w-[270px] lg:w-[100%] 2xl:w-[270px] p-1 absolute  bottom-0 overflow-hidden bg-light_purple1 flex flex-col justify-center items-center">
                    <h1 className="text-[1em] text-white font-medium">{props.data.name}</h1>
                    <p className="text-white text-[0.8em] px-2">{props.data.content}</p>
                    <a href="#" className="learn text-light_purple text-center text-[0.8em]">Learn More</a>
                </div>
            </div>
        </>
    )
}