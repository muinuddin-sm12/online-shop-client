/* eslint-disable react/prop-types */
import { useState } from "react";

const Sort = ({handleSort}) => {
  const [sort, setSort] = useState("");


  const handleChange = (e) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);
    handleSort(selectedSort); // Call the handler passed from Products
  };
  return (
    <div className="w-full flex justify-end ">
      <select
        onChange={handleChange}
        value={sort}
        className="rounded-lg btn bg-[#135D66] px-4 py-2 border-none text-white outline-none"
      >
        <option value="">Sort</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
        <option value="newProduct">Newest first</option>
      </select>
    </div>
  );
};

export default Sort;
