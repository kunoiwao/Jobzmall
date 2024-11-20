import * as React from "react";
import Image from "next/image";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";

export default function Notification() {
  return (
    <Dropdown>
      <MenuButton
        sx={{
          borderRadius: 9999,
        }}
        variant="plain"
        size="lg"
      >
        <div className="absolute text-gray-600">
          <Image className="cursor-pointer md:block hidden p-2 rounded-full" src={"/image/icon/notification.svg"} alt="M" width={40} height={40}/>
        </div>
      </MenuButton>
      <Menu
        sx={{ borderRadius: 20, paddingTop: 0 }}
        invertedColors
        variant="plain"
        color="primary"
        size="sm"
      >
        <div className="flex items-center bg-[#9333EA] h-[72px]">
          <div className="py-4 pl-6 pr-4 text-base text-white font-medium">
            Notifications
          </div>
        </div>
        <MenuItem>
          <div className="flex flex-auto cursor-pointer px-5 py-5 pl-6 w-[360px]">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-4 bg-gray-200 rounded-full d opacity-65"><Image src={"/image/icon/inbox.png"} alt="" width={20} height={20}/> </div>
            <div className="flex flex-col flex-auto">
              <div className="text-[#262626] text-sm">
                Welcome to JobzMall, Yoshito! We have sent you a verification
                email. Please confirm your email to get the most out of
                JobzMall.
              </div>
              <div className="text-[#737373] leading-none text-xs mt-2">
                Sep 06, 11:42 AM
              </div>
            </div>
          </div>
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}
