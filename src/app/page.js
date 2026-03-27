import Image from "next/image";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import FetaureProducts from "./Component/FetaureProducts";
import Category from "./Component/Category";
import Work from "./Component/Work";
import { blogs } from "../../public/blogs";
import Link from "next/link";
import BlogCard from "./Component/BlogCard";
import Footer from "./Component/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <FetaureProducts />
      <Work />
      <div className="w-10/12 my-15 mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl">Recent News Articles</h1>
          <p className="text-sm text-gray-600">Many desktop publishing packages and web page editors</p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {
            blogs.slice(0, 1).map(blog => <BlogCard key={blog.id} blog={blog}/>)
          }

          {
            blogs.slice(1, 2).map(item => {
              return (
                <div key={item.id}>
                  <Link href={`/blogs/${item.id}`} className="h-full">
                    <Image className="rounded-xl h-full" quality={300} required src={item.image} alt="photo" height={400} width={400} />

                  </Link>
                </div>
              )
            })
          }

          <div className="grid grid-rows-2 ">
            {
              blogs.slice(3, 5).map(item => {
                return (
                  <div className="border-b flex flex-col justify-center border-gray-500/20" key={item.id}>
                    <div className="">
                      <p className="text-gray-600 my-2">By <span className="text-black">{item.by}</span></p>
                    </div>
                    <div>
                      <Link href={`/blogs/${item.id}`} className="text-lg cursor-pointer">{item.title}</Link>
                      <div className="text-gray-600"><span>{item.date}</span> . <span>{item.postTime}</span></div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

      </div>
      <Footer/>

    </>
  );
}
