
import project1 from "/images/project/project1.jpg"
import project2 from "/images/project/project2.jpg"
import project3 from "/images/project/project3.jpg"
import project4 from "/images/project/project4.jpg"
import project5 from "/images/project/project5.jpg"
import { IoIosLink } from "react-icons/io";

function Ourfinishedprojects() {
    return (
        <>
            <div className="container border-  min-h-[800px]">
                <div className="content flex flex-col lg:my-14 lg:mx-44 md:mx-24 mx-10 my-2  gap-4">
                    <h1 className="font-serif text-4xl font-[600] text-light_gary">Our Finished Projects</h1>
                    <p className="text-sans-serif text-gray">Pallamco laboris nisi ut aliquip ex ea commodo <br /> consequat.</p>
                </div>
                <div className="grid place-items-center">
                    <div className="image_box h-full grid xl:block columns-3 gap-8 w-[80%] md:p-5">
                        <div className="mainCardWrapper h-full overflow-hidden ">
                            <div className={`childCard flex flex-col text-white gap-3 `}>
                                <IoIosLink className="text-[1.5em]" />
                                <div className="text-[1.5em]">Aquasition</div>
                                <div>Busisness Planing</div>
                            </div>
                            <img src={project1} className="h-full transition-all ease-in-out duration-200 " alt="" />
                        </div>
                        <div className="grid gap-5">
                            <div className="mainCardWrapper imageWrapper h-full overflow-hidden">
                                <div className={`childCard flex flex-col text-white gap-3 `}>
                                    <IoIosLink className="text-[1.5em]" />
                                    <div className="text-[1.5em]">Aquasition</div>
                                    <div>Busisness Planing</div>
                                </div>
                                <img src={project3} className="w-[100%] transition-all ease-in-out duration-200 hover:scale-[1.2]" alt="" />
                            </div>
                            <div className="mainCardWrapper imageWrapper h-full overflow-hidden">
                                <div className={`childCard flex flex-col text-white gap-3 `}>
                                    <IoIosLink className="text-[1.5em]" />
                                    <div className="text-[1.5em]">Aquasition</div>
                                    <div>Busisness Planing</div>
                                </div>
                                <img src={project2} className="w-[100%] transition-all ease-in-out duration-200 hover:scale-[1.2]" alt="" />
                            </div>
                        </div>
                        <div className="grid gap-5 overflow-hidden">
                            <div className=" mainCardWrapper imageWrapper h-full overflow-hidden">
                                <div className={`childCard flex flex-col text-white gap-3 `}>
                                    <IoIosLink className="text-[1.5em]" />
                                    <div className="text-[1.5em]">Aquasition</div>
                                    <div>Busisness Planing</div>
                                </div>
                                <img src={project4} className="w-[100%] transition-all ease-in-out duration-200 hover:scale-[1.2]" alt="" />
                            </div>
                            <div className=" mainCardWrapper imageWrapper h-full overflow-hidden">
                                <div className={`childCard flex flex-col text-white gap-3 `}>
                                    <IoIosLink className="text-[1.5em]" />
                                    <div className="text-[1.5em]">Aquasition</div>
                                    <div>Busisness Planing</div>
                                </div>
                                <img src={project5} className="w-[100%] transition-all ease-in-out duration-200 hover:scale-[1.2]" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="image_box h-full grid xl:block columns-3 gap-8 w-[80%] md:p-5">
                        <div className="mainCardWrapper h-full overflow-hidden ">
                            <div className={`childCard flex flex-col text-white gap-3 `}>
                                <IoIosLink className="text-[1.5em]" />
                                <div className="text-[1.5em]">Aquasition</div>
                                <div>Busisness Planing</div>
                            </div>
                            <img src={project1} className="h-full transition-all ease-in-out duration-200 " alt="" />
                        </div>
                        <div className="grid gap-5">
                            <div className="mainCardWrapper imageWrapper h-full overflow-hidden">
                                <div className={`childCard flex flex-col text-white gap-3 `}>
                                    <IoIosLink className="text-[1.5em]" />
                                    <div className="text-[1.5em]">Aquasition</div>
                                    <div>Busisness Planing</div>
                                </div>
                                <img src={project3} className="w-[100%] transition-all ease-in-out duration-200 hover:scale-[1.2]" alt="" />
                            </div>
                            <div className="mainCardWrapper imageWrapper h-full overflow-hidden">
                                <div className={`childCard flex flex-col text-white gap-3 `}>
                                    <IoIosLink className="text-[1.5em]" />
                                    <div className="text-[1.5em]">Aquasition</div>
                                    <div>Busisness Planing</div>
                                </div>
                                <img src={project2} className="w-[100%] transition-all ease-in-out duration-200 hover:scale-[1.2]" alt="" />
                            </div>
                        </div>
                        <div className="grid gap-5 overflow-hidden">
                            <div className=" mainCardWrapper imageWrapper h-full overflow-hidden">
                                <div className={`childCard flex flex-col text-white gap-3 `}>
                                    <IoIosLink className="text-[1.5em]" />
                                    <div className="text-[1.5em]">Aquasition</div>
                                    <div>Busisness Planing</div>
                                </div>
                                <img src={project4} className="w-[100%] transition-all ease-in-out duration-200 hover:scale-[1.2]" alt="" />
                            </div>
                            <div className=" mainCardWrapper imageWrapper h-full overflow-hidden">
                                <div className={`childCard flex flex-col text-white gap-3 `}>
                                    <IoIosLink className="text-[1.5em]" />
                                    <div className="text-[1.5em]">Aquasition</div>
                                    <div>Busisness Planing</div>
                                </div>
                                <img src={project5} className="w-[100%] transition-all ease-in-out duration-200 hover:scale-[1.2]" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="viewall my-14 border w-36 text-center py-2 bg-purple border-purple text-white cursor-pointer hover:bg-white hover:text-purple">
                        <div>VIEW ALL</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourfinishedprojects