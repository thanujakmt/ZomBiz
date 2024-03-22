
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState,useRef } from "react";

export default function Header() {

  return (
    <>
      <div className="info py-3 w-full text-gray">
        <div className="container">
          <ul className='md:flex lg:justify-between lg:flex md:flex-row flex justify-between flex-col'>
            <div className="mobile_email p-1 md:flex 2xl:ml-[180px]">
              <li className='flex 2xl:pl-[50px] md:pl-[55px] lg:pl-[10px]'>
                <FaPhoneAlt className='m-[6px] text-[0.8em]' /><a href="" className='ml-2'>  +992 563 542</a>
              </li>
              <li className='flex md:pl-[50px]'>
                <MdEmail className='m-1' /><a href="" className='ml-2'> info@domain.com</a>
              </li>
            </div>
            <div className="register px-3">
              <ul className='flex'>
                <li className='p-1'>
                  <a href="" className='text-lg mr-5 font-[400]'>Register / Log in</a>
                </li>
                <div className="icons flex">
                  <li>
                    <FaFacebookF className='m-2 text-[1.2em]' />
                  </li>
                  <li>
                    <FaGooglePlusG className='m-1 text-[1.8em]' />
                  </li>
                  <li>
                    <FaLinkedinIn className='m-2 text-[1.2em]' />
                  </li>
                  <li>
                    <FaTwitter className='m-2 text-[1.2em]' />
                  </li>
                </div>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}