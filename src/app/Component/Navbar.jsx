"use client"
import React, { useState } from 'react';
import localFont from 'next/font/local'
import Link from 'next/link';

const myFont = localFont({
    src: "../../../public/font/rockybilly/Rockybilly.ttf",
});
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav className=" shadow-md fixed w-full top-0 z-50 bg-black/70">

            <div className="max-w-7xl mx-auto px-4">

                <div className="flex justify-between items-center h-16">

                    {/* Logo */}

                    <Link href="/" className="text-2xl font-bold text-green-600">
                        <p className=''><span className={`${myFont.className} text-sm`}>Resume</span> <span className='text-white'>BD</span></p>
                    </Link>


                    {/* Desktop Menu */}

                    <div className="hidden md:flex items-center gap-6">

                        <Link href="/" className=" text-white hover:text-green-500">
                            Home
                        </Link>

                        <Link href="/jobs" className=" text-white hover:text-green-500">
                            Find Jobs
                        </Link>

                        <Link href="/companies" className=" text-white hover:text-green-500">
                            Companies
                        </Link>

                        <Link href="/saveJobs" className=" text-white hover:text-green-500">
                            Saved Jobs
                        </Link>

                        <Link href="/employerDetails" className=" text-white hover:text-green-500">
                            Employers Details
                        </Link>

                        <Link href="/blogs" className=" text-white hover:text-green-500">
                            Blogs
                        </Link>

                        {/* <Link href="/dashboard" className=" text-white hover:text-green-500">
                            Dashboard
                        </Link> */}

                    </div>


                    {/* Auth Buttons */}

                    <div className="hidden md:flex items-center gap-4">

                        <Link
                            href="/login"
                            className="px-6 py-2 border border-green-500 hover:border-black rounded-lg text-white  hover:bg-green-500"
                        >
                            Login
                        </Link>

                        {/* <Link
                            href="/singUp"
                            className="px-6 py-2 group relative  border border-transparent hover:border-green-500 overflow-hidden text-white rounded-lg"
                        >
                            {/* <span className='bg-green-500 absolute w-full top-0 -z-1 left-0 h-full'></span> */}
                            {/* <span className='bg-green-500 absolute w-full top-0 group-hover:rotate-45 transition-routate duration-150 group-hover:h-0 group-hover:w-0  -z-1 left-0 h-full'></span>
                            Post Job */}

                    </div>


                    {/* Mobile Menu Button */}

                    <button
                        className="md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >

                        ☰

                    </button>

                </div>

            </div>


            {/* Mobile Menu */}

            {menuOpen && (

                <div className="md:hidden bg-white border-t">

                    <div className="flex flex-col p-4 gap-4">

                        <Link href="/">Home</Link>

                        <Link href="/jobs">Find Jobs</Link>

                        <Link href="/companies">Companies</Link>

                        <Link href="/saved-jobs">Saved Jobs</Link>

                        <Link href="/dashboard">Dashboard</Link>

                        <Link href="/login">Login</Link>

                        <Link href="/register">Post Job</Link>

                    </div>

                </div>

            )}

        </nav>
        // <div className='fixed top-5 z-100 w-full '>
        //     <div className='w-10/12 mx-auto'>
        //         <div>
        //             <p className='text-green-500'><span className={myFont.className}>Resume</span> <span className='text-white'>BD</span></p>
        //             <div>
        //                 <Link href={'/'} >Home</Link>
        //                 <Link href={'/'} >Home</Link>
        //                 <Link href={'/'} >Home</Link>
        //                 <Link href={'/'} >Home</Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Navbar;