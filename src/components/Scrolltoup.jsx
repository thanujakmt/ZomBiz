
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useEffect,useState,useRef } from "react";
import Consult from "./Consult";

function Scrolltoup(){

    const scrollToNavbar = () => {
        window.scrollTo({ top: Consult, behavior:"smooth"})
    };

    useEffect(() => {
        scrollToNavbar();
    }, []);

    return(
        <>
            <div className="h-32 w-full flex items-center justify-end px-5 sticky bottom-0 z-50" onClick={scrollToNavbar} >
                <div  className=" text-4xl bg-purple text-white rounded-[5px] hover:rounded-[35px] transition-all ease-in-out duration-500" >
                    <MdKeyboardDoubleArrowUp />
                </div>
            </div>
        </>
    );
}

export default Scrolltoup;