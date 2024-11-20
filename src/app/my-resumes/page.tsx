"use client"
import Image from "next/image";
import Header from "@/components/Header/Header";
import PlanModal from "@/components/My-resumes/planModal";
import UploadResume from "@/components/My-resumes/uploadButton";
import AppNav from "@/components/Navbar/AppNav";

export default function MyResumes() {
  return (
    <>
      <div className="fixed w-full top-0 z-10"><Header/></div>
      <div className="flex flex-col flex-auto h-screen pt-[76px]">
        <div className="relative px-4 py-8 overflow-hidden bg-gray-800 flex-0 sm:p-16 dark">
          <svg
            viewBox="0 0 960 540"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMax slice"
            xmlns="http://www.w3.org/2000/svg"
            className="md:hidden absolute inset-0 pointer-events-none"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="100"
              className="text-gray-700 opacity-25"
            >
              <circle r="234" cx="196" cy="23"></circle>
              <circle r="234" cx="790" cy="491"></circle>
            </g>
          </svg>
          <video
            muted
            autoPlay
            loop
            src="/video/5.mp4"
            className="hidden md:block absolute top-0 left-0 object-cover w-full h-full"
          ></video>
          <div className="relative z-10 flex flex-col items-center">
            <div className="mt-1 text-white text-4xl font-extrabold leading-tight tracking-tight text-center text-shadow-sm sm:text-5xl">
              Resume Manager
            </div>
            <div className="tracking-tight text-center text-gray-300 text-shadow-sm sm:text-2xl">
              Get a free professional resume review and take your job search to
              the next level!
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center pb-0 space-y-9 sm:p-6 sm:justify-end md:p-8 md:pb-0 bg-gray-100 h-full">
          <div className="flex flex-col w-full items-center justify-center mt-4 space-y-3 sm:space-y-0 sm:space-x-3 sm:justify-end sm:flex-row md: sm:mt-0">
            <PlanModal/>
            <UploadResume/>
            {/* <ResumeButton /> */}
          </div>
          <div className="flex flex-col h-full items-center justify-center flex-auto">
            <Image className="mt-6 w-50" src={"/image/resume.png"} alt="" width={200} height={132}/>
            <div className="mb-6 text-xl font-semibold tracking-tight text-[#737373]">Your uploaded resumes will appear here</div>
          </div>

        </div>
      </div>
      <AppNav/>
    </>
  );
}
