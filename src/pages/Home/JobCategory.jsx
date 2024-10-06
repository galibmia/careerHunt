import React from 'react';
import icon1 from "../../assets/icons/accounts 1.svg"
import icon2 from "../../assets/icons/business 1.svg"
import icon3 from "../../assets/icons/social-media 1.svg"
import icon4 from "../../assets/icons/chip 1.svg"

const JobCategory = () => {
    return (
        <div className='my-32 w-[70%] mx-auto'>
            <h1 className='text-5xl font-extrabold text-center'>Job Category List</h1>
            <p className='text-center text-gray-400 my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid grid-cols-4 gap-8 mt-8'>
                <div className='bg-[#f9f9ff] rounded-md p-10'>
                    <img className='bg-[#efedff] rounded-lg p-2' src={icon1} alt="" />
                    <h3 className='text-xl font-bold my-4 text-[#474747]'>Account & Finance</h3>
                    <p className='text-[#A3A3A3]'>300 Jobs Available</p>
                </div>
                <div className='bg-[#f9f9ff] rounded-md p-10'>
                    <img className='bg-[#efedff] rounded-lg p-2' src={icon2} alt="" />
                    <h3 className='text-xl font-bold my-4 text-[#474747]'>Creative Design</h3>
                    <p className='text-[#A3A3A3]'>100+ Jobs Available</p>
                </div>
                <div className='bg-[#f9f9ff] rounded-md p-10'>
                    <img className='bg-[#efedff] rounded-lg p-2' src={icon3} alt="" />
                    <h3 className='text-xl font-bold my-4 text-[#474747]'>Marketing & Sales</h3>
                    <p className='text-[#A3A3A3]'>150 Jobs Available</p>
                </div>
                <div className='bg-[#f9f9ff] rounded-md p-10'>
                    <img className='bg-[#efedff] rounded-lg p-2' src={icon4} alt="" />
                    <h3 className='text-xl font-bold my-4 text-[#474747]'>Engineering Job</h3>
                    <p className='text-[#A3A3A3]'>224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;