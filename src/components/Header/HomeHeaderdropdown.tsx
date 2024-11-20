import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";
import { Button } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

export default function HomeHeaderdropdown() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(["Maximum Visibility"])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          sx={{
            color: "#737373",
            padding: "10px 20px",
            borderRadius: "5px",
            textTransform: "none",
          }}
          className="text-nowrap text-sm"
        >
          {selectedValue === "Maximum Visibility" ? (
            <LightModeOutlinedIcon className="text-red-500 text-xl mr-2" />
          ) : (
            <WbSunnyOutlinedIcon className="text-red-500 text-xl mr-2" />
          )}
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        className="bg-white w-80 p-4 rounded-xl"
        aria-label="Single selection example"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem
          key="Maximum Visibility"
          className="focus:outline-none hover:bg-gray-100"
        >
          <div className="flex p-2">
            <div className="mr-4">
              <LightModeOutlinedIcon className="text-red-500" />
            </div>
            <div className="flex flex-col">
              <div className="text-base font-medium">Maximum Visibility</div>
              <div className="text-gray-600 text-sm overflow-x-clip">
                My profile is openly visible to
                <br />
                companies and recruiters,
                <br /> maximizing my exposure and job
                <br /> opportunities.
              </div>
            </div>
          </div>
        </DropdownItem>
        <DropdownItem
          key="Privacy Focused"
          className=" hover:bg-gray-100 focus:outline-none"
        >
          <div className="flex p-2">
            <div className="mr-4">
              <WbSunnyOutlinedIcon className="text-red-500" />
            </div>
            <div className="flex flex-col">
              <div className="text-base font-medium">Privacy Focused</div>
              <div className="text-gray-600 text-sm overflow-x-clip">
                My profile remains hidden
                <br /> from public view, visible only to
                <br /> organizations I directly apply to, <br />
                ensuring my privacy.
              </div>
            </div>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
