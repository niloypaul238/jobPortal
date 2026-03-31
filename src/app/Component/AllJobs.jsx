"use client"
import React, { useContext, useState } from 'react';
import { CreateContextExport } from '../Context/Context';
import Card from './Card';
import { Search } from 'lucide-react';

const AllJobs = () => {
    const { allJobs, setAllJobs } = useContext(CreateContextExport)
    const [filterJob, setFilterJob] = useState(allJobs)
    const [inputType, setInputType] = useState('')
    //  console.log(allJobs);

    const onChangeFilter = (e) => {
        const val = e.target.value
        setInputType(val)
        const filterData = val.length > 0 ? filterJob.filter(job => job.title.toLowerCase().includes(val.toLowerCase())) : allJobs
        setFilterJob(filterData)
    }

    // paginaion code start
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentData = inputType == "" ? filterJob.slice(firstIndex, lastIndex) : filterJob;

    const totalPages = Math.ceil(filterJob.length / itemsPerPage);
    return (
        <div className='bg-gray-100'>
            <div className='w-10/12 mx-auto py-7  '>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <p className='text-3xl relative '><span className='absolute bg-green-600 w-18 h-0.5 bottom-1 rounded-full'></span> Find Your Dream Job</p>
                    <div className='bg-white p-2 flex  items-center gap-x-4 w-full'>
                        <input type="text" onChange={(e) => onChangeFilter(e)} value={inputType} className='border border-gray-400/70 rounded basis-11/12 outline-0 p-1' placeholder='Search Job' />
                        <div className='basis-1/12 text-center'>
                            <Search className=' bg-green-700 p-1 cursor-pointer rounded text-white' size={30} />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-5 mt-4'>
                    <div>
                        {/* Data show */}
                        <div className="grid md:grid-cols-3  gap-4">
                            {currentData.length > 0 ? currentData.map(job => <Card key={job.id} job={job} />) : <h1 className='col-span-3 text-center text-gray-500 text-2xl'>No Found Job</h1>}
                        </div>

                        {/* Pagination buttons */}
                        <div className="flex justify-center gap-2 mt-5">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`px-3 py-1 border cursor-pointer  ${currentPage === i + 1 ? "bg-blue-500  border-blue-500 text-white" : "border-gray-400"
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllJobs;