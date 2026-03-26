"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Category = () => {
    const [allData, setAllData] = useState([])
    const [cate, setCate] = useState([])


    useEffect(() => {
        const solvedData = async () => {
            const fetchData = await fetch('http://localhost:5001/jobs')
            const data = await fetchData.json()
            setAllData(data);
        }
        solvedData()

    }, [])

// console.log(allData);
    allData?.map(item => {
        if (!cate.includes(item.jobCategory)) {
            setCate([...cate, item.jobCategory])
        }
    })




    // // console.log(allData);
    // console.log(cate,);
    return (
        <div className='my-10 md:w-10/12 mx-auto '>
            <div className=''>
                <div className='text-center space-y-3'>
                    <h1 className='text-2xl'>Popular Category </h1>
                    <p className='text-sm text-gray-500'>Many desktop publishing packages and web page editors</p>
                </div>
                {/* popular category  */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 mt-6'>
                    {
                        cate?.map(item => {
                            return(
                                <Link href={"/jobs"} key={item} className='bg-gray-100 text-center p-2 text-gray-700 hover:bg-green-500 hover:text-white transition-all duration-500'>{item}</Link>
                            )
                        })
                    }
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Category;