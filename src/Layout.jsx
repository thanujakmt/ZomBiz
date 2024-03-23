
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from "react-router-dom";
import Scrolltoup from './components/Scrolltoup';

function Layout(props) {
    return (
        <>
            <div className='flex flex-col justify-between min-h-screen max-w-screen relative'>
                <div className='sticky top-[-130px] md:top-[-65px] z-50'>
                    <Header />
                    <Navbar  />
                </div>
                <div className=''>
                    <Outlet />
                </div>
                <div className=''>
                    <Footer />
                </div>
                <Scrolltoup/>
            </div>
        </>
    );
}

export default Layout;