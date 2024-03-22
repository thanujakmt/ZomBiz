
import React from 'react';
import { ExpertData } from '../../data/home_data/ExpertData';
import ExpertTeam from './sub_componets/Expertteam';
import Startnewpro from '../about/sub_component/Startnewpro';
import Banner from './sub_componets/Banner';


function Team(props) {
    return (
        <>
            <Banner/>
            <ExpertTeam/>
            <Startnewpro/>
        </>
    );
}

export default Team;