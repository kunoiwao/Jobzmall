"use client";
import * as React from "react";
import { coachings, mostPopulars } from "@/data/resumequestion";

interface StepperProps {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  mode: boolean;
  handleclose: () => void;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const VerticalStepper: React.FC<StepperProps> = ({
  activeStep,
  setActiveStep,
  mode,
  handleclose,
}) => {
  const steps: string[] = [];
  const handleStepClick = (step: number) => {
    setActiveStep(step);
    handleclose();
  };

  if (mode) {
    mostPopulars.map((item) => {
      steps.push(item.name);
    });
  } else {
    coachings.map((item) => {
      steps.push(item.name);
    });
  }

  const getCircleStyle = (index: number) => {
    if (index === activeStep) return "bg-[#171717] border-2 border-[#9333EA]";
    if (index < activeStep) return "bg-[#9333EA] ring-blue-900";
    return "border-2 border-[#737373] bg-[#171717]";
  };

  const getLength = (index: number) => {
    if (mode) {
      if (index === 4) return "mt-9";
      if (index === 5) return "mt-10";
      if (index === 19) return "mt-10";
      if (index === 20) return "mt-9";
      if (index === 21) return "mt-12";
      if (index === 22) return "mt-12";
      if (index === 29) return "mt-10";
      if (index === 33) return "hidden";
      return "mt-5";
    } else {
      if (index === 2) return "mt-10";
      if (index === 4) return "mt-10";
      if (index === 6) return "mt-12";
      if (index === 7) return "mt-10";
      if (index === 9) return "hidden";
      return "mt-7";
    }
  };

  return (
    <div className="bg-[#171717] min-h-screen text-white p-6">
      <div className="relative1 w-full mx-auto">
        <ol className="relative 1border-l-2 border-gray-700">
          {steps.map((question, index) => (
            <li key={index} className="relative1 mb-12 ml-6">
              <div
                className={`w-0.5 h-20 absolute -left-[1px]  ${getLength(
                  index
                )} ${index < activeStep ? "bg-purple-600" : "bg-[#737373]"} ${
                  index === 0 ? "rounded-t-full" : ""
                } ${index === steps.length - 1 ? "rounded-b-full" : ""}`}
              ></div>
              <button
                onClick={() => handleStepClick(index)}
                className="group flex items-center w-full text-left focus:outline-none"
              >
                <span
                  className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 transition-colors duration-200 ${getCircleStyle(
                    index
                  )}`}
                >
                  {index + 1}
                </span>
                <h3 className={`flex items-center mb-1 text-sm font-semibold}`}>
                  {question}
                </h3>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default VerticalStepper;
