import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

export default function HeaderDropdown() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(["Maximum Visiblity"])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="text-nowrap">
          <LightModeOutlinedIcon />
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        className="flex flex-col"
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="Maximum Visiblity">
          <LightModeOutlinedIcon />
          Maximum Visiblity
        </DropdownItem>
        <DropdownItem key="Privacy Focused">
          <WbSunnyOutlinedIcon />
          Privacy Focused
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
