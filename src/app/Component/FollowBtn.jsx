"use client"
import React, { useContext } from 'react';
import { CreateContextExport } from '../Context/Context';

const FollowBtn = () => {
    const { follow, setFollow } = useContext(CreateContextExport)
    return (
        <div>
            <div className='flex gap-4'>
                <button onClick={()=>setFollow(!follow)} className='bg-green-600 cursor-pointer hover:bg-white mt-2 hover:text-black border border-green-600 text-white px-4 py-2 rounded-md font-medium transition'>{follow ? "Followed" : "Follow Us"}</button> 
                <button className='border-gray-100 bg-white border text-black hover:bg-green-700 mt-2 hover:text-white px-4 py-2 rounded-md font-medium transition'>Add Review</button>
            </div>
        </div>
    );
};

export default FollowBtn;