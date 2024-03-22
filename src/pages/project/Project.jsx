
import React from 'react';
import Banner from './sub_projects/Banner';
import Ourfinishedprojects from './sub_projects/Ourfinishedprojects';

function Project(props) {
    return (
        <>
            <div className=' flex flex-col justify-center items-center'>
                <Banner/>
                <Ourfinishedprojects/>
            </div>
        </>
    );
}

export default Project;