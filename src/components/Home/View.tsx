import ProgressSM from "./ProgressSM";

const View = () => {
  return (
    <>
      <div className="hidden max-md:flex flex-col pb-6 px-4 pt-4 overflow-hidden w-full rounded-b-[50px] bg-gray-900 mb-8">
        <div className="text-white text-3xl w-full text-left pb-3 capitalize font-medium text-shadow-lg">
          Good morning, Sir
        </div>
        <div className="flex">
          <div className="flex flex-col w-1/2 items-center py-2">
            <div className="text-white font-bold text-2xl my-4">19</div>
            <div className="text-[#A3A3A3] text-sm">Profile View</div>
          </div>
          <div className="flex flex-col w-1/2 items-center py-2">
            <div className="text-white font-bold text-2xl my-4">0</div>
            <div className="text-[#A3A3A3] text-sm">Applications</div>
          </div>
          <div className="flex flex-col w-1/2 items-center py-2">
            <div className="flex w-[100px] h-full items-center justify-center">
              <div className="absolute rounded-full border-[3px] w-10 h-10 border-[#6b21a8]"></div>
              <ProgressSM />
            </div>
            <div className="text-[#A3A3A3] text-sm">Profile Strength</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
