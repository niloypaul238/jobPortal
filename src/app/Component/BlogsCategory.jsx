"use client"
import React, { useState } from 'react';
import { blogs } from '../../../public/blogs';
import Link from 'next/link';

const BlogsCategory = () => {
    const [category,setCategory] = useState([])
    blogs.map(item => {
        if(!category.includes(item.category)){
            setCategory([...category,item.category])
        }
    })
    
    return (
        <div className='flex justify-evenly w-10/12 mx-auto mt-10'>
            {
                category.map(item => <Link href={'/blogs'} key={item} className='bg-gray-100 px-5 py-1 hover:bg-green-500 hover:text-white cursor-pointer transition-all duration-200'>{item}</Link>)
            }
        </div>
    );
};

export default BlogsCategory;