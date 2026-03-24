"use client"
import Image from "next/image"
import Link from "next/link"

export default function CompanyCard({ company }) {

    return (
        <div className="p-3 md:p-0">
            
                <div className="border p-5 rounded-xl hover:shadow-lg border-green-600 transition">
                    <Link href={`/companies/${company.id}`} className=" flex  justify-around gap-x-4 ">
                        <div className="relative overflow-hidden">
                            <Image
                                src={company.logo}
                                width={20}
                                height={20}
                                className="object-cover h-20 w-20 rounded-full "
                                quality={100}
                                alt={"logo"}
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold mt-3">{company.name}</h3>

                            <p className="text-sm text-gray-500">
                                {company.location}
                            </p>

                            <p className="text-green-600 text-sm">
                                {company.openJobs} Jobs Available
                            </p>
                        </div>
                    </Link>
                    <Link href={`/companies/${company.id}`} className="bg-green-900 flex justify-center mt-3 md:hidden  text-white">See More</Link>
                </div>
        </div>


    )

}