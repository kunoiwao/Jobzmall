"use client";
import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import Header from "@/components/Header/Header";
import AppNav from "@/components/Navbar/AppNav";

const Calendar = () => {
  const currentDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = monthNames[currentDate.getMonth()];
  const day = currentDate.getDate();
  const dayOfWeek = dayNames[currentDate.getDay()];

  return (
    <>
      <div className="bg-slate-200 sm:h-screen h-full">
        <Header />
        <div className="flex flex-col items-center justify-start flex-auto w-full min-w-full px-4 pb-24 sm:pb-4 md:pl-20">
          <div className="flex flex-col w-full mt-12 max-w-5xl">
            <div className="text-[#262626] font-extrabold text-4xl leading-none tracking-tight">
              Calender
            </div>
            <div className="ml-0.5 font-medium text-[#737373] text-sm">
              Manage your meetings with others. Your JobzMall Calendar will
              automatically sync with your existing calendars
            </div>
            <div className="">
              <a
                className="flex flex-row items-center mt-1 mb-6 text-purple-600 cursor-pointer text-sm"
                href="/user/settings?selected=integrations"
              >
                Calendar Integrations
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  //   fit=""
                  height="20px"
                  width="20px"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="sm:px-4 sm:flex sm:p-4 sm:py-5 bg-white rounded-md max-md:flex-col">
            <div className="hidden overflow-hidden sm:border-r lg:flex lg:flex-col sm:w-1/3">
              <div className="flex items-center justify-center w-8 h-8 overflow-hidden text-lg font-semibold text-center text-gray-600 uppercase bg-gray-200 rounded-full group-hover:bg-gray-400">
                Y
              </div>
              <div className="mt-3 font-medium text-gray-500 capitalize break-words ">
                Yoshiro User
              </div>
              <div className="mb-4 text-xl font-semibold text-gray-900 break-words">
                My Calender
              </div>
            </div>
            <div className="w-full px-2 py-4 space-x-2 sm:py-0 sm:flex">
              <div className="sm:min-w-[455px] px-2 sm:w-1/2 sm:border-r">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DateCalendar"]}>
                    <DemoItem>
                      <DateCalendar
                        views={["day"]}
                        sx={{
                          width: "100%",
                          height: "500px",
                          fontSize: 28,
                          fontWeight: 900,
                          color: "#262626",
                        }}
                      />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div className="flex flex-col mt-8 text-center sm:mt-0 sm:pl-4 md:mb-5">
                <div className="mb-4 text-lg ffont-light text-left">
                  <div className="text-[#262626] text-base">
                    <b>{dayOfWeek}, </b>
                    {month} {day}
                  </div>
                </div>
                <div className="grid flex-grow grid-cols-1 sm:grid-cols-2 sm:gap-x-2 overflow-y-auto sm:block md:h-[364px] items-center mt-20">
                  <div className="flex justify-center">
                    <div className="flex w-10 h-10 rounded-full text-gray-600 bg-gray-200 text-2xl text-center items-center z-10">
                      <div className="w-full -translate-y-1">
                        <InboxOutlinedIcon />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 text-lg font-semibold text-[#262626]">
                    No meetings for {dayOfWeek}, {month} {day}
                  </div>
                  <div className="w-full mt-1 text-center sm:max-w-60 text-md text-[#737373]">
                    When you have meetings for this date, they will appear here.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppNav />
    </>
  );
};

export default Calendar;
