import { Search } from 'lucide-react';
import { Jost } from 'next/font/google';
import React from 'react';

const jost = Jost({
    subsets: ["normal"],
    weight: ["400", "500", "600", "700", "800", "900"],
})
const Hero = () => {
    return (
        <div className='pt-15'>
            <section
                className="relative w-full min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage:
                        "url('https://htmldemo.net/finate/finate/assets/img/slider/slider-bg.webp')",
                }}
            >
                {/* overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 max-w-5xl text-center text-white px-6">

                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        <span className="text-green-500"><span className={jost.className}>2,568</span></span> job available
                        <br />
                        You can choose your dream job
                    </h2>

                    <p className="mt-4 text-gray-300">
                        Find great job for build your bright career. Have many job in this
                        platform.
                    </p>

                    {/* Search Box */}
                    <div className="mt-10 bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">

                        <input
                            type="text"
                            placeholder="Job title or keywords"
                            className="px-4 py-4 text-gray-700 outline-none flex-1"
                        />

                        <select className="px-4 py-4 text-gray-700 outline-none border-l">
                            <option>Choose City</option>
                            <option>Dhaka</option>
                            <option>Chittagong</option>
                            <option>Khulna</option>
                        </select>

                        <select className="px-4 py-4 text-gray-700 outline-none border-l">
                            <option>Category</option>
                            <option>Developer</option>
                            <option>Designer</option>
                            <option>Marketing</option>
                        </select>

                        <button className="bg-green-500 px-6 flex items-center justify-center text-white">
                            <Search size={20} />
                        </button>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;