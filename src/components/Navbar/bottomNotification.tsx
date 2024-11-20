import Image from "next/image";

const BottomNotifications = () => {
  return (
    <>
      <div className="flex flex-col rounded-xl shadow-lg shadow-purple-200">
        <div className="flex items-center bg-[#9333EA] h-[72px] rounded-t-xl">
          <div className="py-4 pl-6 pr-4 text-base text-white font-medium">
            Notifications
          </div>
        </div>
        <div className="flex flex-auto cursor-pointer px-5 py-5 pl-6 w-[360px] bg-white rounded-b-xl">
          <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-4 bg-gray-200 rounded-full ">
            <Image
              src={"/image/icon/inbox.png"}
              alt=""
              width={20}
              height={20}
            />
          </div>
          <div className="flex flex-col flex-auto">
            <div className="text-[#262626] text-sm">
              Welcome to JobzMall, Yoshito! We have sent you a verification
              email. Please confirm your email to get the most out of JobzMall.
            </div>
            <div className="text-[#737373] leading-none text-xs mt-2">
              Sep 06, 11:42 AM
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNotifications;
