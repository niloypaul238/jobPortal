import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogCard = ({blog}) => {
    return (
    
            <div key={blog.id}>
                <div className="">
                    <Image className="rounded-xl" quality={300} required src={blog.image} alt="photo" height={250} width={400} />
                    <p className="text-gray-600 my-2">By <span className="text-black">{blog.by}</span></p>
                </div>
                <div>
                    <Link href={`/blogs/${blog.id}`} className="text-lg cursor-pointer">{blog.title}</Link>

                    <div className="text-gray-600"><span>{blog.date}</span> . <span>{blog.postTime}</span></div>
                </div>
            </div>
      
    );
};

export default BlogCard;