"use client";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ChildProps {
  mOpen: boolean;
  isMOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Message: React.FC<ChildProps> = ({ mOpen, isMOpen }) => {
  const handleOpen = () => {
    isMOpen(!mOpen);
  };
  return (
    <>
      <div className="w-80 flex flex-col fixed right-2 bottom-0 bg-white z-10 rounded-t-lg">
        <div
          className="w-80 h-14 flex items-center justify-between border-b cursor-pointer"
          onClick={() => handleOpen()}
        >
          <div className="flex items-center p-2">
            <div className="flex w-8 h-8 mr-4 items-center justify-center text-lg text-gray-600 uppercase bg-gray-200 rounded-full">
              {" "}
              Y{" "}
            </div>
            {/* <div className="flex items-center justify-center text-lg text-gray-600 uppercase bg-gray-200"></div> */}
            <div className="font-medium leading-5 truncate cursor-pointer text-[#262626] text-sm">
              Messaging
            </div>
          </div>
          {mOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </div>
        <div
          className={`flex flex-col items-center justify-center flex-auto px-8 py-12 sm:justify-start transition-[height] ease-linear ${
            mOpen ? "" : "h-0 hidden"
          }`}
        >
          <div className="flex items-center justify-center rounded-full flex-0 w-14 h-14 bg-[#F3E8FF] ng-tns-c171-148">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="black"
              className="w-6 h-6 ng-tns-c171-148"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                className="ng-tns-c171-148"
              ></path>
            </svg>
          </div>
          <div className="mt-5 text-2xl font-semibold tracking-tight text-[#262626]">
            No conversations
          </div>
          <div className="text-center mt-1 text-md text-[#737373]">
            When we have conversations, they will appear here.
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
