
import React from 'react';
import Banner from './sub_component/Banner';
import Ourhistory from './sub_component/Our_history';
import Vissionmission from './sub_component/Vissionmission';
import Whatwedo from '../home/sub_component/Whatwedo';
import Counter from '../home/sub_component/Counter';
import Client from '../home/sub_component/Client';
import Startnewpro from './sub_component/Startnewpro';


function About(props) {
    return (
        <>
            <div className=' flex flex-col justify-center items-center'>
                <Banner/>
                <Ourhistory/>
                <Vissionmission/>
                <Counter/>
                <Whatwedo/>
                <Client/>
                <Startnewpro/>
            </div>
        </>
    );
}

export default About;