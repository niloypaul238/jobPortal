"use client"
import React, { useContext, useState } from 'react';
import { CreateContextExport } from '../Context/Context';
import Image from 'next/image';
import { Eye, Trash } from 'lucide-react';
import Link from 'next/link';

const SaveJobs = () => {
    const { saveJobsList, setSaveJobsList } = useContext(CreateContextExport)
    const [sl, setSl] = useState(0)
    const deleteFun = (id) => {
        const del = saveJobsList.filter(job => job.id !== id)
        setSaveJobsList(del);
    }
    return (
        <div>
            <h1 className='text-2xl mb-3'>Your Save Jobs </h1>
            <div className=''>
                <div className='grid grid-cols-6 text-center border-b text-gray-600 text-lg border-gray-100 p-2 w-full bg-white'>
                    <p>SL</p>
                    <p>Image</p>
                    <h1>Title</h1>
                    <p className=''>Location</p>
                    <p>Skill</p>
                    <p>Action</p>
                </div>
                {
                    saveJobsList.map((job, index) => {
                        return (

                            <div key={job.id} className='grid grid-cols-6 text-center border-b border-gray-100 p-2 w-full bg-white'>
                                <p >{index + 1}</p>
                                <Image alt='image' className='mx-auto' src={job.companyLogo} width={50} height={50} />
                                <h1>{job.title}</h1>
                                <p className=''><span className='text-center'>{job.location}</span></p>
                                <p>{job.skills.join(', ')}</p>
                                <div className='flex justify-center gap-x-2' ><Trash onClick={() => { deleteFun(job.id) }} className='text-red-700 cursor-pointer' /><Link href={`/jobs/${job.id}`} ><Eye className='' /></Link></div>
                            </div>

                        )
                    })
                }
                {saveJobsList.length == 0 && <p className='text-center bg-white text-gray-400 p-1'>No Jobs</p>}
            </div>
        </div>
    );
};

export default SaveJobs;