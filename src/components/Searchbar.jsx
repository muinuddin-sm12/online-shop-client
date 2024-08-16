import { IoIosSearch } from 'react-icons/io'

const Searchbar = () => {
  return (
    <div className="w-full flex justify-center py-10">
            <div className="flex items-center relative">
            <input className="px-4 py-2 w-[300px] outline-none bg-gray-100" type="text" placeholder="search products"/>
            <IoIosSearch className="absolute right-[16px] cursor-pointer text-xl"/>
            </div>
        </div>
  )
}

export default Searchbar