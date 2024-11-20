import Image from "next/image";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";

export default function Job() {
  return (
    <>
      <div className="flex flex-col bg-white rounded-2xl p-4 max-sm:h-28  max-w-[272px] max-md:max-w-full max-md:w-full cursor-pointer">
        <div className="flex md:flex-row justify-between items-center">
          <div>
            <Image
              className="rounded-full max-sm:w-16 max-sm:h-16"
              src={"/image/logo/aviva.png"}
              alt=""
              width={72}
              height={72}
            />
          </div>
          <div className="bg-slate-200 text-slate-600 rounded-full font-semibold sm:text-sm text-[10px] px-4 py-2 h-fit">
            Full-time
          </div>
        </div>
        <div className="max-md:absolute sm:left-32 left-28 max-sm:max-w-44">
          <div className="md:mt-4 line-clamp-1 sm:text-xl text-sm font-medium text-[#262626]">
            Finance Allocation Manager
          </div>
          <div className="mt-0.5 line-clamp-1 text-sm text-[#737373]">
            Aviva
          </div>
          <div className="max-md:flex max-md:flex-col">
            <div className="flex items-center mt-0.5 text-sm text-[#737373] md:mb-5 max-md:mr-2">
              <div className="md:hidden flex">
                <LocationOnOutlinedIcon
                  sx={{ color: "#A3A3A3", fontSize: 16 }}
                  fontSize="small"
                />
              </div>
              <div>Markham, ON, Canada</div>
            </div>
            <div className="flex items-center md:mb-2 max-md:mt-0.5">
              <div className="md:hidden flex">
                <EventOutlinedIcon
                  sx={{ color: "#A3A3A3", fontSize: 16 }}
                  fontSize="small"
                />
              </div>
              <div className="max-md:hidden">
                <AccessTimeFilledIcon
                  sx={{ color: "#A3A3A3" }}
                  fontSize="small"
                />
              </div>
              <div className="flex ml-1.5 text-xs text-[#737373]">
                2 Days Ago
              </div>
            </div>
          </div>
          <div className="max-md:hidden flex items-center mb-2">
            <MonetizationOnIcon sx={{ color: "#A3A3A3" }} fontSize="small" />
            <div className="ml-1.5 text-xs text-[#737373]">
              Depends on Experience
            </div>
          </div>
          <div className="max-md:hidden flex items-center mb-2">
            <SignalCellularAltIcon sx={{ color: "#A3A3A3" }} fontSize="small" />
            <div className="ml-1.5 text-xs text-[#737373]">Senior Level</div>
          </div>
        </div>
      </div>
    </>
  );
}
