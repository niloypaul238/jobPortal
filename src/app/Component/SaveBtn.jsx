"use client"
import { Heart } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { CreateContextExport } from '../Context/Context';
import { useRouter } from 'next/navigation';


const SaveBtn = ({ filterData }) => {
    const data = filterData[0]
    const [save, setSave] = useState(false)
    const { saveJobsList, setSaveJobsList } = useContext(CreateContextExport)
    const route = useRouter()

    useEffect(() => {
            saveJobsList && saveJobsList.map(job => {
                if (Number(job.id) === Number(data.id)) {
                    setSave(true)
                } else {

                    setSave(false)
                }

            }) 

        

    }, [])


    const SaveBtn = () => {

        if (saveJobsList.length > 0) {
            saveJobsList.map(job => {
                if (Number(job.id) === Number(data.id)) {
                    setSave(false)
                    const filData = saveJobsList.filter(jo => jo.id !== job.id)
                    setSaveJobsList([...filData])

                } else {
                    setSaveJobsList([...saveJobsList, data])
                    setSave(true)
                    route.push("/saveJobs")
                }

            })
        } else {
            setSaveJobsList([data])
            setSave(true)
            route.push("/saveJobs")
        }
        

    }
    return (
        <div>
            <button onClick={SaveBtn} className={`${save ? "bg-green-600 text-white" : "bg-white text-green-600"} flex items-center cursor-pointer gap-x-1 hover:bg-green-700 mt-2 hover:text-white text-green-600 px-4 py-2 rounded-md font-medium transition`}><Heart size={20} className='' />{save ? "Saved" : "Save"}</button>
        </div>
    );
};

export default SaveBtn;