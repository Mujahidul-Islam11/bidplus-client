import React from 'react';

const Newsletter = () => {
    return (
        <div style={{background: "url(https://i.ibb.co/s34hxVJ/BidPlus.png)"}} className='px-4 md:px-16 my-6 md:my-12 flex-col md:flex-row justify-center md:justify-between flex h-80 bg-opacity-60 items-center rounded-lg'>
            <div className='bg-black px-4 md:px-6 py-6 md:py-14 bg-opacity-40'>
                <h3 className='text-2xl md:text-4xl text-white font-bold'>Subscribe for Newsletters</h3>
                <p className='text-white'>Get E-mail updates about our latest surveys</p>
            </div>
            <div className='mt-6 md:mt-0 flex-col md:flex-row flex gap-4 items-center'>
                <input placeholder='Enter email to get started' type="email" className='md:w-[400px] border outline-[#2f71ffbf] py-3 px-6 rounded-lg text-[#2f71ffbf]'/>
                <button className='btn btn-primary bg-[#2F71FF] text-white border-none hover:bg-[#2f71ffbf]'>Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;