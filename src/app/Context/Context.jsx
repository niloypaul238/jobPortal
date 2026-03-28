"use client"
import React, { createContext, useEffect, useState } from 'react';

export const CreateContextExport = createContext() 

const Context = ({children}) => {
    const [allJobs,setAllJobs] = useState([])
    const [saveJobsList,setSaveJobsList] = useState([])
    const [follow,setFollow] = useState(false)
    useEffect(()=>{
         fetch("http://localhost:5001/jobs")
        .then(res => res.json())
        .then(data => setAllJobs(data))
    },[])
    return (
        <CreateContextExport.Provider value={{allJobs,setAllJobs,saveJobsList,setSaveJobsList,follow,setFollow}}>
            {children}
        </CreateContextExport.Provider>
    );
};

export default Context;