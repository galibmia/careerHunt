import React from 'react';
import Hero from './Hero';
import JobCategory from './JobCategory';
import FeaturedJob from './FeaturedJob';

const Home = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <div className='md:w-[70%] mx-auto'>
            <JobCategory></JobCategory>
            <FeaturedJob></FeaturedJob>
            </div>
        </div>
    );
};

export default Home;