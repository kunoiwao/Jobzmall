import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TuneTwoToneIcon from "@mui/icons-material/TuneTwoTone";
import { useState } from "react";

interface ChildProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const SearchJobs: React.FC<ChildProps> = ({ setFilter }) => {
  const [visible, setVisible] = useState(false);
  const handleFilter = () => {
    setVisible(!visible);
    if (visible) {
      setFilter("");
    } else {
      setFilter("max-md:hidden");
    }
  };
  return (
    <>
      <input
        className="flex w-full p-2 px-10 rounded bg-gray-200 outline-none cursor-pointer max-md:rounded-full max-md:py-4 max-md:px-12 max-md:bg-white max-md:shadow-lg placeholder-gray-600 text-black"
        aria-autocomplete="both"
        id="autocomplete-17-input"
        placeholder="Search jobs"
        type="search"
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2">
        <SearchOutlinedIcon className="text-gray-600" fontSize="small" />
      </span>
      <span
        className="md:hidden absolute right-7 top-1/2 -translate-y-1/2 text-gray-600 rotate-90 cursor-pointer"
        onClick={handleFilter}
      >
        <TuneTwoToneIcon fontSize="small" />
      </span>
    </>
  );
};

export default SearchJobs;
