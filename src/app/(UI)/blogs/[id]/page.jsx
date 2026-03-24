import React from 'react';
import { blogs } from '../../../../../public/blogs';
import { Jost } from 'next/font/google';
import BlogsCategory from '@/app/Component/BlogsCategory';
import Image from 'next/image';
import { FacebookIcon, Instagram, Linkedin, Youtube } from 'lucide-react';
import BlogSlider from '@/app/Component/Slider';




const jost = Jost({
    subsets: ["normal"],
    weight: ["400", "500", "600", "700", "800", "900"],
})
const BlogDetails = async ({ params }) => {
    const { id } = await params;
    const findObj = blogs.find(item => item.id === Number(id))


    return (
        <div>
            <div className='w-10/12 mx-auto'>
                <div className='text-center'>
                    <p className='text-gray-600 mb-10'>By <span className='text-black'>{findObj.by}</span> . <span>{findObj.date}</span> <span className='text-black'>.</span> {findObj.postTime}</p>
                    <p className='text-4xl w-11/12 mx-auto text-gray-700 font-semibold'><span className={jost.className}>Simple pricing structure you have the flexibility to be able to grow your business in an effective.</span></p>
                </div>
                {/* blogs category */}
                <div>
                    <BlogsCategory />
                </div>
                <div className=' mt-10 h-100'>
                    <Image
                        alt="image"
                        width={1920}
                        height={1080}
                        className="h-full object-cover rounded-xl"
                        src={findObj.image} />
                </div>
                <div className='w-11/12 mx-auto space-y-5'>
                    <p className='text-3xl my-4'>{findObj.title}</p>
                    <p className='text-gray-600 text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been industry standard dummy text ever since the a galley type and scrambe make type specimen book has survived not only five centuries text of the printing and typesetin indus standard dummy text everem since the 1500s, when an unknown printer.</p>

                    <p className='text-gray-600 text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been industry standard dummy text ever since the a galley type and scrambe make type specimen book has survived not only five centuries text of the printing and typesetin indus standard dummy text everem since the 1500s, when an unknown printer Lorem Ipsum is simply dummy text of the printing and typesetting industry has been industry standar and scrambe make type specimen book has survived not only five centuries text of the printing and typesetin indus standard dummy text everem since the 1500s, when an unknown printer.</p>

                    <div className='bg-green-600 text-white rounded-xl mt-10'>
                        <p className='  text-5xl text-center p-15 leading-17 font-semibold'><span className={jost.className}>2,83k People Receive Our Weekly WordPress Related Newsletter.</span></p>
                    </div>
                    <div className='border-b border-t border-gray-600/30 py-7 my-10 '>
                        <div className='flex w-10/12 mx-auto items-center justify-between '>
                            <p className='text-lg'>Shate this article</p>
                            <div className='flex gap-x-4 items-center'>
                                <FacebookIcon className=' bg-gray-400/30 rounded p-3 hover:bg-green-600 hover:text-white transition-bg cursor-pointer duration-400 hover:border-transparent' size={40} absoluteStrokeWidth />
                                <Linkedin className=' bg-gray-400/30 rounded p-3 hover:bg-green-600 hover:text-white transition-bg cursor-pointer duration-400 hover:border-transparent' size={40} absoluteStrokeWidth />
                                <Instagram className=' bg-gray-400/30 rounded p-3 hover:bg-green-600 hover:text-white transition-bg cursor-pointer duration-400 hover:border-transparent' size={40} absoluteStrokeWidth />
                                <Youtube className=' bg-gray-400/30 rounded p-3 hover:bg-green-600 hover:text-white transition-bg cursor-pointer duration-400 hover:border-transparent' size={40} absoluteStrokeWidth />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            {/* Blogs slider  */}
                <div className='bg-gray-50'>
                    
                    <BlogSlider/>
                </div>
        </div>

    );
};

export default BlogDetails;