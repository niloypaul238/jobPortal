"use client"
import Card from '@/app/Component/Card';
import React, { useState } from 'react';
import { blogs } from '../../../../public/blogs';
import BlogCard from '@/app/Component/BlogCard';

const Blogs = () => {
    const [category, setCategory] = useState(["All"])
    const [allBlogs, setAllBlogs] = useState(blogs)
    const [filterBlog, setFilterBlog] = useState(allBlogs)
    const [inputType, setInputType] = useState('')

    allBlogs.map(blog => {
        if (!category.includes(blog.category)) {
            setCategory([...category, blog.category])
        }
    })

    const changeHandler = (e) => {
        const val = e.target.value.toLowerCase()
        setInputType(val)
        const filterBlogs = val.length > 0 ? allBlogs.filter(item => item.title.toLowerCase().includes(val)) : allBlogs
        setFilterBlog(filterBlogs);
    }

    const CategoryClick = (e) => {
        const categoryText = e.toLowerCase()
        const filterBlog = categoryText === "all" ? allBlogs : allBlogs.filter(item => item.category.toLowerCase() === categoryText)
        setFilterBlog(filterBlog);
    }


    // pagination 
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 6;

    // total page
    const totalPages = Math.ceil(filterBlog.length / itemsPerPage);

    // current data slice
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentBlogs = filterBlog.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    return (
        <div className='w-10/12 md:flex gap-4  mx-auto'>
            <div className='basis-2/12 p-2  h-fit bg-gray-200'>
                <h1 className='text-lg  border-b border-white text-gray-700 mb-3'>Blog Category List </h1>
                <div className='flex w-full flex-col space-y-1'>
                    <input onChange={(e) => changeHandler(e)} value={inputType} type="text" className='border border-green-700 outline-0 bg-white p-1' placeholder='Search Blog...' />
                    {
                        category.map(item => <p onClick={() => CategoryClick(item)} className='bg-green-800/80  overflow-hidden group z-0 cursor-pointer p-1 relative text-white' key={item}><span className='absolute w-full h-full transition-all duration-200 bg-green-500 group-hover:left-0 -left-full top-0 -z-1'></span>{item}</p>)
                    }
                </div>
            </div>
            <div className='basis-9/12 mt-5'>
                <div className='grid sm:grid-cols-2 gap-5 w-full md:grid-cols-3'>
                    {
                        currentBlogs.map(blog => <BlogCard key={blog.id} blog={blog} />)
                    }
                    {currentBlogs.length == 0 && <p className='col-span-3 text-center text-gray-500 text-2xl'>No Blogs Found</p>}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8 gap-2">
                    { Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-4 py-2 rounded-lg ${currentPage === index + 1
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200"
                                }`}
                        >
                            {index + 1}
                        </button>
                    )) }
                </div>
            </div>
        </div>
    );
};

export default Blogs;