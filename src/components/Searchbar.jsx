/* eslint-disable react/prop-types */
import { IoIosSearch } from "react-icons/io";

const Searchbar = ({ onSearch }) => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="flex items-center relative">
        <input
          className="px-4 py-2 w-[300px] outline-none text-white rounded-xl bg-gray-200"
          type="text"
          onChange={(e) => {
            // console.log(e.target.value)
            onSearch(e.target.value)}}
          placeholder="search products"
        />
        <IoIosSearch className="absolute right-[16px] text-[#3C5B6F] cursor-pointer text-xl" />
      </div>
    </div>
  );
};

export default Searchbar;
