"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RouteIcon from "@mui/icons-material/Route";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import { menuList } from "@/data/search";

const SearchBox: React.FC = () => {
  const allSuggestions: string[] = [];
  const allDescriptions: string[] = [];
  menuList.map((item) => {
    allSuggestions.push(item.title);
    allDescriptions.push(item.description);
  });
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>(allSuggestions);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref for the dropdown

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    if (value) {
      const filteredSuggestions = allSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setIsDropdownOpen(false);
    setSuggestions([]);
  };

  const handleInputFocus = () => {
    if (!inputValue) {
      setSuggestions(allSuggestions);
    }
    setIsDropdownOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full  " ref={dropdownRef}>
      <input
        className="flex w-full p-2 pl-10 pr-10 rounded-full bg-gray-200 outline-blue-200 outline-8 cursor-pointer placeholder-gray-600 text-black"
        aria-autocomplete="both"
        id="autocomplete-17-input"
        placeholder="Search jobs, companies, and more..."
        type="search"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onClick={handleInputFocus}
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 ">
        <SearchOutlinedIcon className="text-gray-600" />
      </span>
      {isDropdownOpen && (
        <div className="absolute z-20 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
          <div className="bg-slate-200 px-4 py-1.5 font-medium text-sm text-gray-900">
            Quick actions
          </div>
          {suggestions.map((suggestion, idx) => (
            <div
              key={suggestion}
              className="flex items-center px-7 py-5 hover:bg-gray-200 cursor-pointer"
            >
              <div className="text-blue-500">
                {idx === 0 && (
                  <div className="w-6 h-6">
                  <Image
                    className="text-blue-500"
                    src={"/image/icon/bluebag.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  </div>
                )}
                {idx === 1 && (
                  <div className="w-6 h-6">
                  <Image
                    className="text-blue-500"
                    src={"/image/icon/application.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  </div>
                )}
                {idx === 2 && (
                  <div className="w-6 h-6">
                  <Image
                    className="text-blue-500"
                    src={"/image/icon/bluevideo.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  </div>
                )}
                {idx === 3 && (
                  <div className="w-6 h-6">
                    <Image
                      className="text-blue-500"
                      src={"/image/icon/bluepen.svg"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                )}
                {idx === 4 && <RouteIcon />}
                {idx === 5 && <CorporateFareIcon />}
              </div>
              <div className=" pl-6">
                <div
                  className="text-lg font-medium text-gray-900"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
                <div className="text-gray-600 text-sm">
                  {menuList.find((item) => item.title === suggestion)
                    ?.description || ""}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
