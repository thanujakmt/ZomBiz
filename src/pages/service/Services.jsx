
import React from 'react';
import Bannerservice from './sub_component/Banner';
import { servicesData } from '../../data/home_data/ServicesData';
import Service from '../home/sub_component/Service';
import Ourservices from '../home/sub_component/Ourservices';
import Startnewpro from '../about/sub_component/Startnewpro';



function Services(props) {
    return (
        <>
            <div className=' flex flex-col justify-center items-center'>
                <Bannerservice/>
                <Ourservices/>
                <Startnewpro/>
            </div>
        </>
    );
}

export default Services;