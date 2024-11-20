"use client"
import React, { useState } from "react"
import Image from "next/image";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeHeaderdropdown from "./HomeHeaderdropdown";
import Notification from "./Notification";
import Message from "./Message";
import SearchBox from "./SearchBox";
import Account from "./Account";

export default function Header() {
  const [ mOpen, isMOpen ] = useState(false);
  const handleMessage = () => {
    isMOpen(!mOpen)
  } 

  return (
    <>
      <div className="flex justify-between items-center mx-auto md:pl-16 sm:px-8 h-[76px] gap-8 bg-white">
        <div className="md:ml-8">
          <Image className="min-w-[180px] max-w-48" src={"/logo.png"} alt="" width={320} height={200} priority/>
        </div>
        <div className="hidden md:flex w-full relative">
              {/* <SearchOutlinedIcon className="absolute pl-2 top-1/2 text-3xl 1translate-x-1/2 -translate-y-1/2" /> */}
              {/* <input className="flex w-full p-2 pl-10  rounded-full bg-gray-200 outline-blue-200 outline-8" aria-autocomplete="both" aria-labelledby="autocomplete-17-label" id="autocomplete-17-input" placeholder="Search jobs, companies, and more..." type="search"></input> */}
              <SearchBox/>
        </div>
        <div className="flex items-center justify-end sm:pl-2 pr-4 sm:ml-auto space-x-2 xl:col-span-1">
          <div className="hidden xl:block"><HomeHeaderdropdown/></div>
          <div className="z-10"></div>
          <Message mOpen={mOpen} isMOpen={isMOpen}/>
          <Image className="cursor-pointer md:block hidden hover:bg-black hover:bg-opacity-5 p-3 rounded-full" src={"/image/icon/message.svg"} alt="M" width={48} height={48} onClick={() => handleMessage()}/>
          <div className="md:block hidden"><Notification/></div>
          <div className="cursor-pointer md:hidden block text-gray-600"><SearchOutlinedIcon/></div>
          <Account/>
        </div>
      </div>
    </>
  );
}
