"use client";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Checkbox, FormControlLabel } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  title: string;
  content: string[];
}
const DropdownWithCheckboxes: React.FC<Props> = ({
  title,
  content,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleCheckboxChange = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="">
      <Dropdown>
        <DropdownTrigger>
          <div className="flex flex-row items-center">
            <button className="bg-slate-200 border text-slate-600 text-sm px-4 py-2 rounded-full cursor-pointer ring-purple-600 relative shadow flex flex-nowrap gap-2 items-center">
              <p>{title}</p>
              {selectedItems.length > 0 && (
                <span className=" bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {selectedItems.length}
                </span>
              )}
              <ExpandMoreIcon />
            </button>
          </div>
        </DropdownTrigger>
        <DropdownMenu className="bg-white shadow-lg border border-gray-300 rounded-md justify-start">
          {content.map((item) => (
            <DropdownItem key={item}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedItems.includes(item)}
                    onChange={() => handleCheckboxChange(item)}
                  />
                }
                label={
                  <span className="text-gray-900" style={{ fontSize: "14px" }}>
                    {item}
                  </span>
                }
              />
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownWithCheckboxes;
