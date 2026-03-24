import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ job }) => {

    return (
        <div>
            <div key={job.id} className="max-w-sm relative bg-white border overflow-hidden group border-green-600/20 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-green-600/50 transition">
                <span className='absolute w-full blur-3xl right-0 h-full rounded-full  group-hover:bg-green-700/10'></span>
                {/* Company Info */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 overflow-hidden h-12 bg-white rounded-md flex items-center justify-center shadow">
                        <Image
                            src={job.companyLogo}
                            alt="company logo"
                            width={40}
                            height={40}
                            className='w-full h-full'
                        />
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-800">{job.companyName}</h4>
                        <p className="text-sm text-gray-500">{job.location}</p>
                    </div>
                </div>

                {/* Job Title */}
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {job.title}
                </h2>

                {/* Job Type */}
                <p className={`text-blue-600 font-medium mb-3 ${job.type == "Full Time" && 'text-green-600'} ${job.type == "Part Time" && 'text-orange-600'}`}>
                    {job.type}
                </p>

                {/* Skills */}
                <p className="text-gray-500 text-sm mb-6">
                    {job.skills.join(", ")}
                </p>

                {/* Bottom Section */}
                <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-gray-800">
                        {job.salary} <span className="text-sm text-gray-500">/monthly</span>
                    </p>

                    <Link href={`/jobs/${job.id}`} className="bg-green-600  z-0 overflow-hidden relative hover:bg-green-400 text-white px-4 py-2 rounded-md font-medium transition">
                        Apply Now
                        <span className='absolute w-40 h-40 group-hover:top-0 -z-1 transition-top duration-900 rounded-full bg-green-900 top-40 left-1/2 -translate-x-1/2 -translate-y-1/2'></span>
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default Card;