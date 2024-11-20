"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import BottomNotifications from "./bottomNotification";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const [show, setShow] = React.useState(false);
  const router = useRouter();

  const handleNavigation = (newValue: number, path: string) => {
    setValue(newValue);
    setShow(false);
    router.push(path);
  };

  return (
    <>
      <Box>
        <BottomNavigation
          sx={{ height: 62 }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeRoundedIcon />}
            onClick={() => handleNavigation(0, "/home")}
          />
          <BottomNavigationAction
            label="Jobs"
            icon={<BusinessCenterOutlinedIcon />}
            onClick={() => handleNavigation(1, "/jobs")}
          ></BottomNavigationAction>
          <BottomNavigationAction
            label="Notifications"
            icon={<NotificationsNoneOutlinedIcon />}
            onClick={() => setShow(!show)}
          />
          <BottomNavigationAction label="More" icon={<WidgetsOutlinedIcon />} />
        </BottomNavigation>
      </Box>
      {show && (
        <div className="absolute top-0 -translate-y-full left-[15%]">
          <BottomNotifications />
        </div>
      )}
    </>
  );
}
