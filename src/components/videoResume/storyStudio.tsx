"use client";
import { useEffect, useState } from "react";
import SegmentIcon from "@mui/icons-material/Segment";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import VideoSidebar from "./videoSidebar";
import VideoModal from "./videoModal";

let init;
if (window.innerWidth > 1280) {
  init = "ml-[360px]";
} else {
  init = "";
}
const StoryStudio = () => {
  const [ , setOpen] = useState(false);
  const [barWidth, setBarWidth] = useState("-translate-x-full");
  const [mainWidth, setMainWidth] = useState(init);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [subtitle, setSubtitle] = useState("");
  const [ , setClick] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [mode, setMode] = useState(true);

  const handleSidebar = () => {
    setOpen(prevOpen => {
      const newOpen = !prevOpen;
      console.log("HandleSidebar--->", newOpen);

      if (newOpen) {
        setBarWidth("translate-x-0");
        if (screenWidth > 1280) setMainWidth("ml-[360px]");
        console.log("HandleSidebar.true--->", newOpen, "Bar Width:", "translate-x-0");
      } else {
        setBarWidth("-translate-x-full");
        setMainWidth("");
        console.log("HandleSidebar.false--->", newOpen, "Bar Width:", "-translate-x-full");
      }

      return newOpen;
    });
  }

  const handleclose = (): void => {
    setOpen(false);
    setBarWidth("-translate-x-full");
    setMainWidth("");
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth < 1280) {
        setOpen(false);
        setBarWidth("-translate-x-full");
        setMainWidth("");
      } else {
          setOpen(true);
          setBarWidth("translate-x-0");
          setMainWidth("ml-[360px]");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const incStep = () => {
    if (mode) {
      if (activeStep < 33) setActiveStep((activeStep) => activeStep + 1);
    } else {
      if (activeStep < 9) setActiveStep((activeStep) => activeStep + 1);
    }
  };
  const decStep = () => {
    if (activeStep > 0) setActiveStep((activeStep) => activeStep - 1);
  };

  return (
    <>
      <div className="bg-[#171717] h-screen flex">
        {/* sidebar */}
        <div
          className={`absolute overflow-scroll trn z-20 w-[360px] ${barWidth} transition-transform duration-200 ease-linear `}
        >
          <VideoSidebar
            setSubtitle={setSubtitle}
            setClick={setClick}
            handleclose={handleclose}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            mode={mode}
            setMode={setMode}
          />
        </div>
        {/* mainpage */}
        <div
          className={`flex flex-col w-full h-screen ${mainWidth} transition-all duration-200 ease-linear `}
        >
          {/* topbar */}
          <div className="flex justify-between items-center h-[73px] w-full px-6 py-4 border-b border-gray-600 md:order-1 order-2">
            <div onClick={handleSidebar}>
              <SegmentIcon className="text-gray-200 cursor-pointer" />
            </div>
            <div className="text-white">Done</div>
          </div>
          <div
            className="text-white order-1 md:order-2 h-full"
            onClick={handleclose}
          >
            <VideoModal subtitle={subtitle} setClick={setClick}/>
          </div>
        </div>
        <div className="absolute hidden lg:flex right-10  flex-col h-full items-center justify-center mx-auto space-y-3">
          <button
            className=" bg-black bg-opacity-80 flex-0 rounded-full"
            onClick={decStep}
          >
            <KeyboardArrowUpIcon
              className={activeStep !== 0 ? "text-white" : "text-gray-900"}
              fontSize="large"
            />
          </button>
          <button
            className=" bg-black bg-opacity-80 flex-0 rounded-full"
            onClick={incStep}
          >
            <KeyboardArrowDownIcon
              className={
                mode
                  ? activeStep !== 33
                    ? "text-white"
                    : "text-gray-900"
                  : activeStep !== 9
                  ? "text-white"
                  : "text-gray-900"
              }
              fontSize="large"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default StoryStudio;

