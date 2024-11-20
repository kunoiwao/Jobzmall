"use client";
import { useState } from "react";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import VerticalStepper from "./interviewStep";
import { coachings, mostPopulars } from "@/data/resumequestion";

interface DrawerProps {
  setSubtitle: React.Dispatch<React.SetStateAction<string>>;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
  handleclose: () => void;

}

const VideoSidebar: React.FC<DrawerProps> = ({
  setSubtitle,
  setClick,
  handleclose,
  activeStep,
  setActiveStep,
  mode,
  setMode,
}) => {
  const [open, setOpen] = useState(true);

  let title, description, index;
  if (mode) {
    title = mostPopulars[activeStep].name;
    description = mostPopulars[activeStep].content;
    index = 34;
    setSubtitle(description);
  } else {
    title = coachings[activeStep].name;
    description = coachings[activeStep].content;
    index = 10;
    setSubtitle(description);
  }

  const handleMode = () => {
    setOpen(!open)
  };

  const handleMost = () => {
    setMode(true);
    setActiveStep(0);
    setOpen(false)
  };

  const handleCoaching = () => {
    setMode(false);
    setActiveStep(0);
    setOpen(false)
  };

  return (
    <>
      <div className={`bg-[#1E293B] h-screen`}>
        <div className="flex flex-col items-start p-8 border-b bg-[#171717]">
          <div
            className="cursor-pointer py-0.5 px-3 rounded-full text-xs font-semibold bg-blue-500 text-blue-100"
            onClick={handleMode}
          >
            <div></div>
            {mode ? "Most Popular" : "Coaching"}
            <div className={`${open ? "hidden" : ""} absolute bg-[#262626] w-[300px] h-[667px] rounded-xl z-10 mt-2 -translate-x-3 p-3`} p-4 onClick={handleMode}>
              <div className="text-white text-lg pb-4">Topics</div>
              <div className="flex flex-row justify-between items-center" onClick={handleMost}>
                <div className="w-full">
                  <div className={`${mode ? "text-[#4ADE80]" : ""} text-base`}>Most Popular</div>
                  <div className={`${mode ? "text-[#4ADE80]" : ""} text-[13px]`}>34 questions</div>
                </div>
                {mode && <CheckRoundedIcon className="text-[#4ADE80]" fontSize="small"/>}
              </div>
              <div className="flex flex-row justify-between items-center mt-3"  onClick={handleCoaching}>
                <div className="w-full">
                  <div className={`${mode ? "" : "text-[#4ADE80]"} text-base`}>Coaching</div>
                  <div className={`${mode ? "" : "text-[#4ADE80]"} text-[13px]`}>10 questions</div>
                </div>
                {!mode && <CheckRoundedIcon className="text-[#4ADE80]" fontSize="small"/>}
              </div>
            </div>
          </div>
          <div className="mt-3 text-xl font-semibold text-white">{title}</div>
          <div className="text-[#A3A3A3] text-sm">{description}</div>
          <div className="flex items-center mt-6 leading-5 text-md text-[#A3A3A3]">
            <HelpRoundedIcon sx={{ fontSize: 18 }} />
            <div className="ml-1.5 text-[13px]">{index} Questions </div>
          </div>
        </div>
        <div className="px-8 py-2 bg-[#171717]">
          <VerticalStepper
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            mode={mode}
            handleclose={handleclose}
            setClick={setClick}
          />
        </div>
      </div>
    </>
  );
};

export default VideoSidebar;
