"use client"
import { useState } from "react";
import DropdownWithCheckboxes from "@/components/Jobs/dropdown";
import Job from "@/components/Jobs/Job";
import JobModal from "@/components/Jobs/jobModal";
import JobsHeader from "@/components/Jobs/JobsHeader";
import AppNav from "@/components/Navbar/AppNav";
import { jobsfilter } from "@/data/jobsfilter";
const jobData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
export default function Jobs () {
    const [ filter, setFilter ] = useState("max-md:hidden");
    const [ isClose, setIsClose ] = useState(false)
    const handlemodal = () => {
        setIsClose(true)
    }

    return(
        <>  
            <JobsHeader setFilter={setFilter}/>
            <div className="flex pr-2 pt-36 pb-10 pl-20 bg-[#F1F5F9] justify-center max-md:pt-72 max-md:px-2">
                <div className="flex flex-col max-md:w-full">
                    <div className={`${filter} flex flex-row flex-wrap gap-4 p-4`}>
                        {jobsfilter.map((item) => (
                            <DropdownWithCheckboxes key={item.id} title={item.title} content={item.content} />
                        ))}
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 p-4 my-10 gap-x-4 gap-y-8 max-md:w-full">
                        {jobData.map((item) => (
                            <div key={item} className="hover:-translate-y-21 transition-transform" onClick={handlemodal}><Job/></div>
                        ))}
                    </div>
                </div>
            </div>
            <AppNav/>
            {isClose && <JobModal setIsClose={setIsClose}/>}
        </>
    )

}