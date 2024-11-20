"use client";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
interface Props {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const SwithButton: React.FC<Props> = ({ checked, setChecked }) => {
  return (
    <>
      <div className="flex w-52 h-9 p-1 bg-opacity-0 border border-white rounded-full items-center justify-center">
        {checked ? (
          <div
            className="flex w-full justify-end cursor-pointer z-20"
            onClick={() => setChecked(!checked)}
          >
            <div className="flex w-24 h-7 text-white text-sm items-center justify-center bg-[#EAB308] px-1 py-2.5 rounded-full">
              <AccessTimeFilledRoundedIcon fontSize="small" />
              Pay Later
            </div>
          </div>
        ) : (
          <div
            className="flex w-full justify-start cursor-pointer z-20"
            onClick={() => setChecked(!checked)}
          >
            <div className="flex w-24 h-7 text-white text-sm items-center justify-center bg-[#22C55E] px-1 py-2.5 rounded-full">
              <BoltRoundedIcon fontSize="small" />
              Pay Now
            </div>
          </div>
        )}
        <div className="absolute flex items-center justify-between z-10">
          <div className="flex w-24 h-7 text-white text-sm items-center justify-center py-2.5 rounded-full">
            <BoltRoundedIcon fontSize="small" />
            Pay Now
          </div>
          <div className="flex w-24 h-7 text-white text-sm items-center justify-center py-2.5 rounded-full">
            <AccessTimeFilledRoundedIcon fontSize="small" />
            Pay Later
          </div>
        </div>
      </div>
    </>
  );
};

export default SwithButton;
