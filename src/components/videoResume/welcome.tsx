"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";

interface ChildProps {
  setNext: React.Dispatch<React.SetStateAction<boolean>>;
}
const Welcome: React.FC<ChildProps> = ({ setNext }) => {
  const [play, setPlay] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlay("hidden");
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setPlay("");
    }
  };
  return (
    <>
      <div className="flex flex-col items-center p-5 pt-10 sm:pt-0 sm:justify-center w-full min-h-full mx-auto sm:container sm:flex-row h-screen bg-white">
        <div className="flex gap-1 prose prose-h2:p-0 prose-h2:m-0 prose-h3:p-0 prose-h3:mt-4 prose-p:p-0 prose-p:my-2 flex-col items-start justify-center order-1 sm:order-0 md:w-1/2 h-full max-w-xl ">
          <h2 className="sm:text-[32px] text-2xl font-bold text-purple-700">
            Welcome to Video Resume Studio
          </h2>
          <p className="my-2 text-[#262626] text-sm md:text-base">
            At JobzMall, we&apos;ve reimagined the resume. Our Video Resume
            Studio lets you showcase your talents through a series of short,
            impactful video responses.
          </p>
          <h3 className="font-semibold text-purple-600 text-xl pt-4 pb-3 max-sm:pb-1 max-sm:pt-2">
            Why Video Resume?
          </h3>
          <ul className="mb-5 pl-[26px] list-disc max-sm:mb-2">
            <li className="pl-1.5 my-2 sm:text-base text-sm text-[#262626]">
              <b>Stand Out:</b> Capture employers&apos; attention in a
              competitive job market
            </li>
            <li className="pl-1.5 my-2 sm:text-base text-sm text-[#262626]">
              <b>Show, Don&apos;t Just Tell:</b> Demonstrate communication
              skills and personality
            </li>
            <li className="pl-1.5 my-2 sm:text-base text-sm text-[#262626] max-sm:my-1">
              <b>Effecient for Employers:</b> Hiring managers can quickly gauge
              your fit
            </li>
          </ul>
          <h3 className="font-semibold text-purple-600 text-xl my-4 max-sm:my-1">
            How It Works
          </h3>
          <ol className="mb-5 pl-[26px] list-decimal max-sm:mb-2">
            <li className="my-2 pl-1.5 sm:text-base text-sm text-[#262626]">
              We ask bite-sized questions about your skills and experience
            </li>
            <li className="my-2 pl-1.5 sm:text-base text-sm text-[#262626]">
              You record short video answers to each question
            </li>
            <li className="my-2 pl-1.5 sm:text-base text-sm text-[#262626]">
              We compile your responses into a compelling video resume
            </li>
          </ol>
          <Button
            sx={{
              borderRadius: "999px",
              color: "white",
              backgroundColor: "#9333EA",
              textTransform: "none",
            }}
            className="p-3 px-8 mb-10 text=sm mt-[26px]"
            variant="contained"
            onClick={() => setNext(true)}
          >
            Continue
          </Button>
        </div>
        <div className="relative flex-col itmes-center justify-center hidden w-full md:flex order-0 sm:order-1 sm:w-1/2">
          <div className="flex w-full justify-center">
            <div className=" scale-y-125">
              <video
                ref={videoRef}
                className="rounded-[50px]"
                width="320"
                height="900"
                muted
              >
                <source src="/video/home.mp4" type="video/mp4" sizes="820" />
              </video>
            </div>
          </div>
          <Image
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            src={"/image/phone-frame.svg"}
            alt=""
            width={360}
            height={727}
            onClick={handlePause}
          />
          <div
            className={`${play} absolute w-fit right-1/2 translate-x-1/2`}
            z-20
            onClick={handlePlay}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="flex w-24 h-24 text-white cursor-pointer ng-tns-c460-43 ng-star-inserted"
            >
              <circle
                cx="12"
                cy="12"
                r="11.5"
                stroke="currentColor"
                className="ng-tns-c460-43"
              ></circle>
              <path
                d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
                fill="currentColor"
                stroke="currentColor"
                className="ng-tns-c460-43"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
