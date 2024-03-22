
import React from 'react';
import Banner from './sub_components/Banner';
import Ourlatestnews from './sub_components/Ourlatestnews';

function Blog(props) {
    return (
        <>
            <div className=' flex flex-col justify-center items-center'>
                <Banner/>
                <Ourlatestnews/>
            </div>
        </>
    );
}

export default Blog;