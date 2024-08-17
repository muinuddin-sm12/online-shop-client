/* eslint-disable react/prop-types */
import { useState } from "react";

const Filter = ({ onFilter }) => {
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onFilter({ brand, category, priceFrom: parseFloat(priceFrom), priceTo: parseFloat(priceTo) });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex">
            <div className="space-y-1 w-[120px] text-sm mr-1">
              <label htmlFor="brand" className="text-gray-600">
                Brand name
              </label>
              <select
                className="w-full px-3 py-2 text-gray-800 border border-[#3C5B6F] focus:outline-[#3C5B6F] rounded-md"
                name="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="">Select name</option>
                <option value="GroomEase">GroomEase</option>
                <option value="HP">HP</option>
                <option value="StickIt">StickIt</option>
                <option value="GlowBright">GlowBright</option>
                <option value="CleanSmile">CleanSmile</option>
                <option value="StyleFit">StyleFit</option>
                <option value="SharpBeard">SharpBeard</option>
                <option value="FreshMen">FreshMen</option>
                <option value="OdorShield">OdorShield</option>
                <option value="FreshTongue">FreshTongue</option>
                <option value="BrushHodl">BrushHodl</option>
                <option value="CleanSound">CleanSound</option>
              </select>
            </div>
          </div>
          <div className="mr-1">
            <div className="space-y-1 w-[120px] text-sm">
              <label htmlFor="category" className="text-gray-600">
                Category
              </label>
              <select
                className="w-full px-3 py-2 text-gray-800 border border-[#3C5B6F] focus:outline-[#3C5B6F] rounded-md"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select category</option>
                <option value="Fashion">Fashion</option>
                <option value="Accessories">Accessories</option>
                <option value="Health & Care">Health & Care</option>
                <option value="Household">Household</option>
                <option value="Personal Care">Personal Care</option>
                <option value="Toys">Toys</option>
                <option value="Electronics">Electronics</option>
              </select>
            </div>
          </div>
          <div>
            <h2 className="text-gray-600 text-sm pb-1">Price range</h2>
            <div className="flex items-center gap-1">
              <div className="w-[70px] text-sm">
                <input
                  className="w-full px-3 py-2 text-gray-800 border border-[#135D66] focus:outline-[#135D66] rounded-md"
                  name="from"
                  id="from"
                  type="number"
                  placeholder="from"
                  value={priceFrom}
                  onChange={(e) => setPriceFrom(e.target.value)}
                />
              </div>
              <div className="w-[70px] text-sm">
                <input
                  className="w-full px-3 py-2 text-gray-800 border border-[#135D66] focus:outline-[#135D66] rounded-md"
                  name="to"
                  id="to"
                  type="number"
                  placeholder="to"
                  value={priceTo}
                  onChange={(e) => setPriceTo(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <input
              type="submit"
              value="Filter"
              className="ml-2 mt-6 px-4 py-2 bg-[#3C5B6F] rounded-lg text-white  cursor-pointer"
            />
          </div>
        </div>
      </form>
    );
  };
  

export default Filter;
