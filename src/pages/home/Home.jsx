import React from 'react';
import Consult from './sub_component/Consult';
import Whatwedo from './sub_component/Whatwedo';
import Aboutus from './sub_component/Aboutus';
import Ourservices from './sub_component/Ourservices';
import Counter from './sub_component/Counter';
import Ourfinishedprojects from "./sub_component/Ourfinishedprojects.jsx"
import ExpertTeam from './sub_component/Expertteam';
import Ourpricingtable from './sub_component/Ourpricingtable';
import Client from '../../../../zombiz/src/Client';
import Clientswithlogo from '../../../../zombiz/src/Clientswithlogo';
import Ourlatestnews from '../../../../zombiz/src/Ourlatestnews';
import Contactus from '../../../../zombiz/src/Contactus';

function Home(props) {
    return (
        <> 
            <div className='mainWrapper flex items-center flex-col'>
                <Consult/>
                <Whatwedo/>
                <Aboutus/>
                <Ourservices/>
                <Counter/>
                <Ourfinishedprojects/>
                <ExpertTeam/>
                <Ourpricingtable/>
                <Client/>
                <Clientswithlogo/>
                <Ourlatestnews/>
                <Contactus/>
            </div>
        </>
    );
}

export default Home;