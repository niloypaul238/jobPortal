import CompanyCard from '@/app/Component/CompanyCard';
import React from 'react';
import { companies } from '../../../../public/companies';

const page = () => {
    return (
        <div>
            <div className="py-16 container mx-auto">

                <h1 className="text-3xl font-bold mb-10">
                    All Companies
                </h1>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {companies.map((company) => (
                        <CompanyCard key={company.id} company={company} />
                    ))}

                </div>

            </div>
        </div>
    );
};

export default page;