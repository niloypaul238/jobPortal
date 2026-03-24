import { BookText, Search, Send, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const Work = () => {
    const steps = [
        {
            id: 1,
            icon: <User />,
            title: "Create an Account",
            desc: "It is long established fact reader distracted readable content",
        },
        {
            id: 2,
            icon: <BookText />,
            title: "CV/Resume",
            desc: "It is long established fact reader distracted readable content",
        },
        {
            id: 3,
            icon: <Search />,
            title: "Find Your Job",
            desc: "It is long established fact reader distracted readable content",
        },
        {
            id: 4,
            icon: <Send />,
            title: "Save & Apply",
            desc: "It is long established fact reader distracted readable content",
        },
    ];

    return (
        <div>

            {/* HOW IT WORK */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-6 my-10 text-center">

                    <h2 className="text-3xl font-bold mb-2">How It Work?</h2>
                    <p className="text-gray-500 mb-12">
                        Many desktop publishing packages and web page editors
                    </p>

                    <div className="grid md:grid-cols-4 gap-10 " >

                        {steps.map((step) => (
                            <div key={step.id} className="flex group flex-col items-center">

                                <div className="w-16 h-16 flex items-center justify-center border border-dashed rounded-xl text-green-500 text-2xl mb-4">
                                    <span className=" p-3 overflow-hidden z-0 rounded-xl relative bg-gray-200/90 transition-bg duration-300 group-hover:text-white ">{step.icon} <span className="bg-green-600 absolute -z-1  w-full h-full left-0 group-hover:top-0 transition-all top-10 duration-300"></span></span>
                                </div>

                                <h3 className="font-semibold mb-2">
                                    {step.title}
                                </h3>

                                <p className="text-gray-500 text-sm">
                                    {step.desc}
                                </p>

                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* DOWNLOAD APP SECTION */}

            <section className="bg-green-600 py-20 text-white text-center z-0 relative" style={{ backgroundImage: 'url(https://htmldemo.net/finate/finate/assets/img/photos/bg1.webp)' }} >
                <div className="absolute w-full h-full bg-green-700/90 top-0 left-0 -z-1"></div>
                <div className="max-w-5xl mx-auto  px-6">

                    <p className="uppercase text-sm mb-3">
                        Trial Version Available
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Download Our Mobile App.
                        <br />
                        You Can Ready Resume & Apply Job.
                    </h2>

                    <div className="flex justify-center gap-6 flex-wrap">

                        <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-2 shadow">
                            <Image alt="mage" width={40} height={40}
                                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                                className="w-6"
                            />
                            Google Play
                        </button>

                        <button className="bg-black px-6 py-3 hover:bg-black/50 transition-bg duration-300 cursor-pointer rounded-lg flex items-center gap-2 shadow">
                            <Image alt="" width={20} height={40}
                                src="https://cdn-icons-png.flaticon.com/512/0/747.png"
                                className="w-6 invert"
                            />
                            App Store
                        </button>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default Work;