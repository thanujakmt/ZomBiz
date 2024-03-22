import React from 'react';
import Consult from './sub_component/Consult';
import Whatwedo from './sub_component/Whatwedo';
import Aboutus from './sub_component/Aboutus';
import Ourservices from './sub_component/Ourservices';
import Counter from './sub_component/Counter';
import Ourfinishedprojects from "./sub_component/Ourfinishedprojects.jsx"
import ExpertTeam from './sub_component/Expertteam';
import Ourpricingtable from './sub_component/Ourpricingtable';
import Client from './sub_component/Client.jsx'
import Clientswithlogo from './sub_component/Clientswithlogo.jsx'
import Ourlatestnews from './sub_component/Ourlatestnews.jsx'
import Contactus from './sub_component/Contactus.jsx'

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