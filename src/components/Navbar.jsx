
import { IoMenuOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import logo from "/images/logo/logo.png"
import { useEffect,useState,useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const [isActive, setActive] = useState(false)

    const handburgerHandler = () => {
        setActive(!isActive)
    }

    const closeNav = () => {
        setActive(!isActive)
    }
    
    return (
        <>
            <div  className=" w-full bg-purple flex items-center justify-center z-50">
                <div className="navbar container flex 2xl:justify-between">
                    <div className="logo flex justify-between w-full items-center h-[90px] mx-5">
                        <img src={logo} className="2xl:ml-[80px]" alt="" />
                        <IoMenuOutline onClick={handburgerHandler} className="text-[2.2em] lg:hidden border-[1px] mr-5 h-8 w-10 rounded-[5px]" />
                    </div>
                    <ul className="lg:flex justify-center items-center 2xl:mr-[140px] text-white hidden">
                        <li className="m-3 cursor-pointer hover:font-medium"><Link to="/">Home</Link></li>
                        <li className="m-3 cursor-pointer hover:font-medium"><Link to="/About">About</Link></li>
                        <li className="m-3 cursor-pointer hover:font-medium"><Link to="/Service">Service</Link></li>
                        <li className="m-3 cursor-pointer hover:font-medium"><Link to="/Project">Project</Link></li>
                        <li className="m-3 cursor-pointer hover:font-medium"><Link to="/Team">Team</Link></li>
                        <li className="m-3 cursor-pointer hover:font-medium"><Link to="/Blog">Blog</Link></li>
                        <li className="m-3 cursor-pointer hover:font-medium"><Link to="/contact">Contact</Link></li>
                        <li className="m-3 cursor-pointer hover:font-medium"><LuShoppingCart className="text-[1.2em]" /></li>
                        <li className="m-3 cursor-pointer hover:font-medium"><CiSearch className="text-[1.2em]" /></li>
                    </ul>
                </div>
                <div className={`menu ${isActive ? "h-[300px]" : "h-[0px]"} transition-all ease-in-out duration-500 overflow-auto w-[100%] bg-liteblue absolute md:top-[150px]  top-[200px]`}>
                    <ul className={`text-white m-6 `}>
                        <li className="m-3 cursor-pointer hover:font-medium" onClick={closeNav} ><Link to="/">Home</Link></li>
                        <li className="m-3 cursor-pointer hover:font-medium" onClick={closeNav} ><Link to="/About">About</Link></li>
                        <li className="m-3 cursor-pointer hover:font-medium" onClick={closeNav} ><Link to="/Service">Service</Link></li>
                        <li className="m-3 cursor-pointer hover:font-medium" onClick={closeNav} ><Link to="/Project">Project</Link></li>
                        <li className="m-3 cursor-pointer hover:font-medium" onClick={closeNav} ><Link to="/Team">Team</Link></li>
                        <li className="m-3 cursor-pointer hover:font-medium" onClick={closeNav} ><Link to="/Blog">Blog</Link></li>
                        <li className="m-3 cursor-pointer hover:font-medium" onClick={closeNav} ><Link to="/contact">Contact</Link></li>
                        <li className="m-3 cursor-pointer hover:font-medium" onClick={closeNav} ><LuShoppingCart className="text-[1.2em]" /></li>
                        <li className="m-3 cursor-pointer hover:font-medium" onClick={closeNav} ><CiSearch className="text-[1.2em]" /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar