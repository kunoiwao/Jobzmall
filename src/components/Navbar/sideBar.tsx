"use client";
import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Tooltip from "@mui/joy/Tooltip";

const Sidebar = () => {
  const router = useRouter();
  return (
    <>
      <div className="hidden fixed pt-[76px] top-0 left-0 md:flex flex-col items-center w-20 h-full bg-white gap-4 z-10 border-r border-gray-200">
        <Tooltip title="Home" placement="right" size="lg" color="primary">
          <Image
            className="w-[56px] h-[56px] p-3 opacity-60 hover:bg-black hover:bg-opacity-10 rounded-lg cursor-pointer"
            src={"/image/icon/home.svg"}
            alt=""
            width={32}
            height={32}
            onClick={() => router.push("/home")}
          />
        </Tooltip>
        <Tooltip title="Jobs" placement="right" size="lg" color="primary">
          <Image
            className="w-[56px] h-[56px] p-3 opacity-60 hover:bg-black hover:bg-opacity-10 rounded-lg cursor-pointer"
            src={"/image/icon/jobs.svg"}
            alt=""
            width={32}
            height={32}
            onClick={() => router.push("/jobs")}
          />
        </Tooltip>
        <Tooltip
          title="Video Resume Studio"
          placement="right"
          size="lg"
          color="primary"
        >
          <Image
            className="w-[56px] h-[56px] p-3 opacity-60 hover:bg-black hover:bg-opacity-10 rounded-lg cursor-pointer"
            src={"/image/icon/camera.svg"}
            alt=""
            width={32}
            height={32}
            onClick={() => router.push("/video-resume-studio/questionnaire")}
          />
        </Tooltip>
        <Tooltip title="My Resumes" placement="right" size="lg" color="primary">
          <Image
            className="w-[56px] h-[56px] p-3 opacity-60 hover:bg-black hover:bg-opacity-10 rounded-lg cursor-pointer"
            src={"/image/icon/pen.svg"}
            alt=""
            width={32}
            height={32}
            onClick={() => router.push("/my-resumes")}
          />
        </Tooltip>
        <Tooltip
          title="Career Coaching"
          placement="right"
          size="lg"
          color="primary"
        >
          <Image
            className="w-[56px] h-[56px] p-3 opacity-60 hover:bg-black hover:bg-opacity-10 rounded-lg cursor-pointer"
            src={"/image/icon/users.svg"}
            alt=""
            width={32}
            height={32}
            onClick={() => router.push("/genius")}
          />
        </Tooltip>
        <Tooltip title="Calendar" placement="right" size="lg" color="primary">
          <Image
            className="w-[56px] h-[56px] p-3 opacity-60 hover:bg-black hover:bg-opacity-10 rounded-lg cursor-pointer"
            src={"/image/icon/calendar.svg"}
            alt=""
            width={32}
            height={32}
            onClick={() => router.push("/calendar")}
          />
        </Tooltip>
        <Tooltip title="More" placement="right" size="lg" color="primary">
          <Image
            className="w-[56px] h-[56px] p-3 opacity-60 hover:bg-black hover:bg-opacity-10 rounded-lg cursor-pointer"
            src={"/image/icon/more.svg"}
            alt=""
            width={32}
            height={32}
          />
        </Tooltip>
      </div>
    </>
  );
};

export default Sidebar;
