import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Card from './Card';

const FetaureProducts = async () => {
    const fetchData = await fetch('http://localhost:5001/jobs')
    const data = await fetchData.json()
    const filterData = data.filter(item => item.featured == true)

    return (
        <div className='bg-gray-100'>
            <div className='w-10/12 mx-auto py-19  '>
                <p className='text-3xl text-center '>Recent Job Circulars</p>
                <div className='grid grid-cols-1 gap-5 mt-4 md:grid-cols-3'>
                    {
                        filterData.map(job => <Card key={job.id} job={job} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default FetaureProducts;