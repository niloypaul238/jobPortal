"use client"
import { Rubik } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const rubik = Rubik({
    subsets: ["normal"],
    weight: ["700", "800", "900"],
})


const NotFound = () => {
    const router = useRouter()

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <p className='text-3xl md:text-9xl'><span className={rubik.className}>404</span></p>
            <p>Page not Found</p>
            <button onClick={()=>{router.back()}} className='bg-green-900 text-white w-30 p-1 mt-2 cursor-pointer'> Back </button> 
        </div>
    );
};

export default NotFound;