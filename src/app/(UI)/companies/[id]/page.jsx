import React from 'react';
import { companies } from "../../../../../public/companies"
import { FacebookIcon, Instagram, Linkedin, MapPin, Phone, Youtube } from 'lucide-react';
import Image from 'next/image';
import { Jost } from 'next/font/google';
import EmployerDetailsJobPost from '@/app/Component/EmployerDetailsJobPost';

const jost = Jost({
    subsets: ["normal"],
    weight: ["400", "500", "600", "700", "800", "900"],
})



const CompanyDetils = async ({ params }) => {
    const { id } = await params;
    const { name, logo, location, industry, size, website, description, openJobs, featured } = companies.find(c => c.id == id)

    // const companyJobs = jobs.filter(
    //     job => job.companyId == params.id
    // )

    return (
        <div className='w-10/12 mx-auto'>
            <div className='bg-gray-200 flex  justify-between p-10'>
                <div className='flex gap-x-6'>
                    <Image alt='logo' className='rounded-xl' src={logo} width={120} height={120} />
                    <div className='space-y-2'>
                        <h1 className='text-2xl'><span className={jost.className}>{name}</span></h1>
                        <p className='flex items-center gap-4 text-gray-500 text-sm'>
                            <span className='flex gap-x-1 items-center'><MapPin size={15} />{location}</span>
                            <span className='flex items-center gap-x-1 text-gray-500 text-sm'><Phone size={15} />+00801840000</span></p>

                    </div>
                </div>

                <div className='flex justify-between gap-x-3'>
                    <div className='flex relative overflow-hidden z-0 flex-col group justify-center items-center transition-all duration-300 rounded-xl   px-4 bg-white'>
                        <span className="bg-green-600 absolute -z-1 w-full h-full left-0 group-hover:top-0 transition-all top-full duration-300"></span>
                        <p className='text-4xl group-hover:text-white'><span className={jost.className}>{openJobs}</span></p>
                        <h1 className='text-sm text-green-600 group-hover:text-white whitespace-nowrap'>Total Jobs</h1>
                    </div>
                    <div className='flex relative overflow-hidden z-0 flex-col group justify-center items-center transition-all duration-300 rounded-xl   px-4 bg-white'>
                        <span className="bg-green-600 absolute  -z-1 w-full h-full left-0 group-hover:top-0 transition-all top-full duration-300"></span>
                        <p className='text-4xl group-hover:text-white'>32</p>
                        <h1 className='text-sm text-green-600 group-hover:text-white whitespace-nowrap'>Review</h1>
                    </div>
                    <div className='flex relative overflow-hidden z-0 flex-col group justify-center items-center transition-all duration-300 rounded-xl   px-4 bg-white'>
                        <span className="bg-green-600 absolute  -z-1 w-full h-full left-0 group-hover:top-0 transition-all top-full duration-300"></span>
                        <p className='text-4xl group-hover:text-white'>568+</p>
                        <h1 className='text-sm text-green-600 group-hover:text-white whitespace-nowrap'>Views</h1>
                    </div>

                </div>
            </div>

            <div className="max-w-7xl mx-auto py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-2 space-y-10">

                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">About Employers</h2>

                            <p className="text-gray-600 leading-6 text-sm mb-4">
                                {description}
                                It is a long established fact that a reader will be distracted the readable content of page when looking atits layout. The point of using is that has more-or-less normal a distribution of letters, as opposed to usin content publishing packages web page editors. It is a long established fact that a reader will be distracts by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that has look like readable publishing packages and web page editors.
                            </p>

                            <p className="text-gray-600 text-sm leading-6 mb-4">
                                It is a long established fact that a reader will be distracted the readable content of a page when looking atits layout. The point of using is that has more-or-less normal a distribution of letters, as opposed to usin content publishing packages web page editors.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 ">
                                <li>✔ Developing custom themes (WordPress.org & ThemeForest Standards)</li>
                                <li>✔ Creating reactive website designs</li>
                                <li>✔ Working under strict deadlines</li>
                                <li>✔ Develop page speed optimized themes</li>
                            </ul>
                        </div>
                        {/* job post */}
                        <div>
                            <EmployerDetailsJobPost />
                        </div>

                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className='lg:col-span-1'>
                        <div className="bg-gray-100 p-6 rounded-lg h-fit">

                            <h3 className="text-xl relative font-semibold mb-4  pb-2">
                                <span className='absolute bg-green-600 w-15 h-0.5 bottom-0 rounded-full'></span>
                                Information
                            </h3>

                            <div className="space-y-2 ">

                                <div className="grid grid-cols-12">
                                    <span className='col-span-5'>Categories</span>
                                    <span>:</span>
                                    <span className=" whitespace-nowrap col-span-5">{industry}</span>
                                </div>
                                <div className="grid grid-cols-12">
                                    <span className='col-span-5'>Company Size </span>
                                    <span>:</span>
                                    <span className="  whitespace-nowrap col-span-5">{size}</span>
                                </div>
                                <div className="grid grid-cols-12">
                                    <span className='col-span-5'>Views</span>
                                    <span>:</span>
                                    <span className="  whitespace-nowrap col-span-5">568+</span>
                                </div>
                                <div className="grid grid-cols-12">
                                    <span className='col-span-5'>Reviews</span>
                                    <span>:</span>
                                    <span className="  whitespace-nowrap col-span-5">(4.8)</span>
                                </div>
                                <div className="grid grid-cols-12">
                                    <span className='col-span-5'>Total Jobs</span>
                                    <span>:</span>
                                    <span className=" whitespace-nowrap col-span-5">{openJobs}</span>
                                </div>
                                <div className="grid grid-cols-12">
                                    <span className='col-span-5'>Location</span>
                                    <span>:</span>
                                    <span className=" whitespace-nowrap col-span-5">{location}</span>
                                </div>
                                <div className="grid grid-cols-12">
                                    <span className='col-span-5'>Phone</span>
                                    <span>:</span>
                                    <span className=" whitespace-nowrap col-span-5">+0053336622</span>
                                </div>
                                <div className="grid grid-cols-12">
                                    <span className='col-span-5'>Website</span>
                                    <span>:</span>
                                    <span className=" whitespace-nowrap col-span-5">{website}</span>
                                </div>

                            </div>

                        </div>
                        <div className='mt-15 bg-gray-100 p-6 rounded-lg h-fit'>
                            <h3 className="text-xl relative font-semibold mb-4  pb-2">
                                <span className='absolute bg-green-600 w-15 h-0.5 bottom-0 rounded-full'></span>
                                Share With
                            </h3>
                            <div className='flex  justify-between items-center'>
                                <FacebookIcon className='border border-gray-400/80 rounded p-1.5 hover:bg-green-600 hover:text-white transition-bg cursor-pointer duration-400 hover:border-transparent' size={30} absoluteStrokeWidth />
                                <Linkedin className='border border-gray-400/80 rounded p-1.5 hover:bg-green-600 hover:text-white transition-bg cursor-pointer duration-400 hover:border-transparent' size={30} absoluteStrokeWidth />
                                <Instagram className='border border-gray-400/80 rounded p-1.5 hover:bg-green-600 hover:text-white transition-bg cursor-pointer duration-400 hover:border-transparent' size={30} absoluteStrokeWidth />
                                <Youtube className='border border-gray-400/80 rounded p-1.5 hover:bg-green-600 hover:text-white transition-bg cursor-pointer duration-400 hover:border-transparent' size={30} absoluteStrokeWidth />
                            </div>
                        </div>

                        <div className='mt-15 bg-gray-100 p-6 rounded-lg h-fit'>
                            <h3 className="text-xl relative font-semibold mb-4  pb-2">
                                <span className='absolute bg-green-600 w-15 h-0.5 bottom-0 rounded-full'></span>
                                Contact Now
                            </h3>
                            <div className='space-y-3'>
                                <input type="text" placeholder='Name : ' className='bg-white w-full  p-2  outline-green-800 rounded' />
                                <input type="email" placeholder='Email : ' className='bg-white w-full p-2  outline-green-800 rounded' />
                                <textarea name="" className='bg-white w-full min-h-52 p-2' placeholder='Massege' id=""></textarea>
                            </div>
                            <button className='bg-green-600 hover:border-green-600 border hover:bg-white hover:text-black w-full text-white p-1 cursor-pointer mt-3'>Send</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default CompanyDetils;