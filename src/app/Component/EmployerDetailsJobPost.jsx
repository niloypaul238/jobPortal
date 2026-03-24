"use client"
import React, { useContext } from 'react';
import { CreateContextExport } from '../Context/Context';
import Card from './Card';
import { Search } from 'lucide-react';

const EmployerDetailsJobPost = () => {
    const { allJobs, setAllJobs } = useContext(CreateContextExport)
    //  console.log(allJobs);
    
    return (
        <div className=''>
         
            <div className=''>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <p className='text-3xl relative '><span className='absolute bg-green-600 w-18 h-0.5 -bottom-1 rounded-full'></span>Open Position</p>   
                </div>
                <div className='grid grid-cols-1 gap-5 mt-6 md:grid-cols-2'>
                    {
                        allJobs?.slice(0,4).map(job => <Card key={job.id} job={job} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default EmployerDetailsJobPost;