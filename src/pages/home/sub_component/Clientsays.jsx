
import { BiSolidQuoteLeft } from "react-icons/bi";

export default function Clientsays(props) {
    return (
        <>
            <div className="2xl:flex 2xl:justify-center 2xl:items-center">
                <div className="slides gap-10  2xl:w-[1700px] my-10 flex flex-col items-center justify-center">
                    <div className="image_box">
                        <img src={props.data.image} className=" rounded-[50%] border-2 border-purple" alt="" />
                    </div>
                    <BiSolidQuoteLeft className="text-light_purple text-5xl" />
                    <div className="para">
                        <p className=" text-gray  px-6 md:text-2xl lg:mx-60 text-center"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae perferendis error maxime perspiciatis soluta, ipsa ab velit et, amet obcaecati asperiores, distinctio illo eos tenetur.</p>
                    </div>
                    <div className="name text-center">
                        <h1 className=" text-2xl font-medium text-purple">Kevin Waston</h1>
                        <p className=" text-gray text-[1.2em]">CEO, kingston</p>
                    </div>
                </div>
            </div>
        </>
    )
}