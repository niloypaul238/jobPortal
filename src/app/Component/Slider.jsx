"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { blogs } from "../../../public/blogs";
import Image from "next/image";
import Link from "next/link";
import { MoveLeft, MoveRight } from "lucide-react";
import { useRef } from "react";

const BlogSlider = () => {
     const swiperRef = useRef(null);

    return (
        <section className="max-w-10/12 mx-auto py-16">

            <div className="flex justify-between items-center mb-10">
                <div className="flex justify-between  w-full">
                    <h2 className="text-3xl font-bold">You may also like</h2>
                    <div className="flex  gap-x-4">
                        <MoveRight onClick={() => swiperRef.current.slidePrev()} className="hover:bg-green-800 hover:text-white bg-gray-300 transition-bg cursor-pointer duration-200 px-2 " size={40} />
                        <MoveLeft onClick={() => swiperRef.current.slideNext()} className="hover:bg-green-800 hover:text-white bg-gray-300 transition-bg cursor-pointer duration-200 px-2 " size={40} />
                    </div>
                </div>
            </div>

            <Swiper
                slidesPerView={3}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={30}
                navigation={false}
                loop={true}
                modules={[Navigation]}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {blogs.map((blog) => (
                    <SwiperSlide key={blog.id}>
                        <div className="group">

                            <Image
                                alt="blog"
                                src={blog.image}
                                width={600}
                                height={350}
                                quality={100}
                                className="rounded-xl w-full h-55 object-cover"
                            />

                            <p className="text-sm text-gray-500 mt-4">
                                By <span className="text-black">{blog.by}</span>
                            </p>

                            <Link href={`/blogs/${blog.id}`} className="text-lg font-semibold mt-2 group-hover:text-blue-600 transition">
                                {blog.title}
                            </Link>

                            <div className="text-sm text-gray-500 mt -3 flex gap-2">
                                <span>{blog.date}</span>
                                <span>•</span>
                                <span>{blog.read}</span>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
};

export default BlogSlider;