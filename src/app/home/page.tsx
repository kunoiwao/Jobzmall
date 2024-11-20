"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Story from "@/components/Home/Story";
import CircularWithValueLabel from "@/components/Home/Progress";
import View from "@/components/Home/View";
import ProgressSM from "@/components/Home/ProgressSM";
import Category from "@/components/Home/Category";
import AppNav from "@/components/Navbar/AppNav";

export default function Home() {
  const [, setProgress] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 25 ? 25 : prevProgress + 1
      );
    }, 10);
  }, []);

  return (
    <>
      <Header />
      <div className="flex max-md:flex-col justify-center md:px-2 md:pt-6 pb-10 md:pl-20 bg-[#F1F5F9]">
        <div className="">
          <View />
        </div>
        <div className="md:grid md:grid-cols-8 sm:px-8 px-3 gap-8 md:max-w-7xl max-w-3xl">
          <div className="flex flex-col relative md:col-span-3 xl:col-span-2">
            <div className="hidden md:flex md:flex-col items-center bg-white mt-[44px] rounded-xl">
              <Image
                className="absolute -translate-y-1/2 rounded-t-xl h-[88px] w-full shadow-md"
                src={"/7.jpg"}
                alt=""
                width={262}
                height={89}
              />
              <div className="flex w-[76px] h-[76px] rounded-full text-gray-600 bg-gray-200 text-2xl text-center items-center z-10">
                <p className="w-full">Y</p>
              </div>
              <div className="flex flex-col px-4 pb-4 pt-2 items-center space-y-4">
                <div className="text-[#252525] font-bold text-2xl ">
                  Yoshito User
                </div>
                <div className="flex p-4 border-l-4 border-[#9333EA] rounded-[4px] shadow-md">
                  <div className="">
                    <CheckCircleIcon
                      sx={{
                        color: "#9333EA",
                        height: "19.21px",
                        width: "19.21px",
                      }}
                    />
                  </div>
                  <div className="flex flex-col pl-4">
                    <div className="text-[#9333EA] text-sm">
                      Fill your Profile
                    </div>
                    <div className="text-[#525252] text-sm mt-1">
                      Incomplete profiles may result in limited visibility and
                      opportunities
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex py-3 border-y w-full">
                <div className="flex flex-col w-1/2 items-center py-2 border-r">
                  <div className="text-[#262626] font-bold text-xl">19</div>
                  <div className="text-[#737373] text-sm">Profile View</div>
                </div>
                <div className="flex flex-col w-1/2 items-center py-2">
                  <div className="text-[#262626] font-bold text-xl">0</div>
                  <div className="text-[#737373] text-sm">Applications</div>
                </div>
              </div>
              <div className="text-[#9333EA] font-bold text-sm px-4 py-6">
                My Profile
              </div>
            </div>
          </div>
          {/* middle */}
          <div className="flex flex-col xl:col-span-4 md:col-span-5">
            <div className="flex bg-gray-900 p-6 rounded-xl">
              <div className="flex flex-col pr-1.5">
                <div className="text-white font-medium md:text-xl text-lg">
                  Fill your Profile
                </div>
                <div className="text-gray-300 md:text-sm text-[13px]">
                  Fill out your profile so you can maximize your visibility to
                  potential employers and recruiters. Shine both like a diamond!
                </div>
                <div className="flex justify-between items-center">
                  <button className="bg-white text-gray-900 text-semibold text-sm w-fit h-fit px-4 py-2.5 mt-6 cursor-pointer rounded-md">
                    Fill your Profile →
                  </button>
                  <div className="hidden max-md:flex w-[100px] h-full items-center justify-center mt-6">
                    <div className="absolute rounded-full border-[3px] w-10 h-10 border-[#6b21a8]"></div>
                    <ProgressSM />
                  </div>
                </div>
              </div>
              <div className="hidden md:flex w-[200px] h-full items-center justify-center">
                <div className="absolute rounded-full border-8 w-20 h-20 border-[#6b21a8]"></div>
                <CircularWithValueLabel />
              </div>
            </div>
            <div className="max-md:block hidden">
              <Category />
            </div>
            <div className="flex flex-col bg-gray-900 p-6 rounded-xl mt-6">
              <div className="flex md:flex-row flex-col-reverse">
                <div className="flex flex-col md:w-1/2">
                  <div className="text-white font-medium text-xl">
                    Need a career companion?
                  </div>
                  <div className="text-gray-300 text-sm">
                    Our coached will guide you through every step and help you
                    find a job you love. Let&apos;s build your career together.
                  </div>
                </div>
                <div className="flex justify-center items-center md:w-1/2">
                  <AvatarGroup max={3}>
                    <Avatar
                      sx={{
                        width: { md: 80, sm: 64 },
                        height: { md: 80, sm: 64 },
                        border: "5 !important",
                        borderColor: "black !important",
                      }}
                      alt="Remy Sharp"
                      src="/image/avatar/hugo.png"
                    />
                    <Avatar
                      sx={{
                        width: { md: 80, sm: 64 },
                        height: { md: 80, sm: 64 },
                        borderWidth: 4,
                        borderColor: "black !important",
                      }}
                      alt="Travis Howard"
                      src="/image/avatar/ashley.png"
                    />
                    <Avatar
                      sx={{
                        width: { md: 80, sm: 64 },
                        height: { md: 80, sm: 64 },
                        borderColor: "black !important",
                      }}
                      alt="Cindy Baker"
                      src="/image/avatar/coach.png"
                    />
                  </AvatarGroup>
                </div>
              </div>
              <button className="bg-white text-gray-900 text-semibold md:text-sm text-[13px] w-fit px-4 py-2.5 mt-6 cursor-pointer rounded-md">
                Connect with a Coach →
              </button>
            </div>
            <div className="py-2"></div>
            <div className="hidden md:block">
              <div className="flex flex-col mb-4">
                <div className="flex flex-col items-center">
                  <h2 className="h-[48px] w-full text-center bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-500 bg-clip-text text-transparent max-w-2xl text-4xl font-medium tracking-tight ">
                    
                    Inspire and Be Inspired
                  </h2>
                  <p className="text-center max-w-xl mb-4 text-lg leading-6 text-[#262626]">
                    
                    Explore the #1 video talent marketplace featuring publicly
                    shared stories. Watch editor-picked video resumes from
                    professionals who&apos;ve chosen to inspire others with
                    their career journeys.
                  </p>
                  <a
                    className="flex space-x-1 items-center text-[#9333EA] font-semibold hover:underline text-center text-base"
                    href="/video-resume-studio/questionnaire"
                  >
                    <span className="">Share Your Story →</span>
                  </a>
                </div>
              </div>
              <Story />
              <Story />
            </div>
          </div>
          <div className="xl:flex flex-col xl:col-span-2 hidden space-y-4">
            <div className="flex flex-col p-6 bg-white rounded-xl">
              <div className="text-[#262626] font-medium text-sm">
                My resumes
              </div>
              <div className="flex flex-col items-center px-8 py-6 pb-0">
                <div className="flex items-center justify-center rounded-full flex-0 w-14 h-14 bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="black"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                      className="ng-tns-c419-623"
                    ></path>
                  </svg>
                </div>
                <div className="mt-5 text-[#262626] text-xl font-semibold text-nowrap">
                  No resumes
                </div>
                <div className="w-full mt-1 text-[#737373] text-center max-w-60 text-[13px]">
                  When you have resumes, they will appear here.
                </div>
              </div>
              <div className="mt-6">
                <a
                  className="block w-full px-4 py-2 text-xs font-medium text-center border border-gray-300 rounded-md shadow-sm text-[#737373] hover:bg-gray-50"
                  href="/my-resumes"
                >
                  Upload Resume
                </a>
              </div>
            </div>
            <div className="flex flex-col p-6 bg-white rounded-xl">
              <div className="text-[#262626] font-medium text-sm">
                My Applications
              </div>
              <div className="flex flex-col items-center px-8 py-6 pb-0">
                <div className="flex items-center justify-center rounded-full flex-0 w-14 h-14 bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="black"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                      className="ng-tns-c328-17"
                    ></path>
                  </svg>
                </div>
                <div className="mt-5 text-[#262626] text-xl font-semibold text-nowrap">
                  No applications
                </div>
                <div className="w-full mt-1 text-[#737373] text-center max-w-60 text-[13px]">
                  When you have applications, they will appear here.
                </div>
              </div>
              <div className="mt-6">
                <a
                  className="block w-full px-4 py-2 text-xs font-medium text-center border border-gray-300 rounded-md shadow-sm text-[#737373] hover:bg-gray-50"
                  href="/Jobs"
                >
                  Find jobs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppNav />
    </>
  );
}
