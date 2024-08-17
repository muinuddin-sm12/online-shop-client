import { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import Searchbar from "../../components/Searchbar";
import Sort from "../../components/Sort";
import axios from "axios";
import Paginations from "../../components/Paginations";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({});
  const [sortedProducts, setSortedProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://online-shop-server-xi.vercel.app/products", {
          params: {
            page,
            limit: 10,
            search: searchText,
            ...filter,
          },
        });
        // console.log("API resposse ", response.data)
        setProducts(response.data.prodcts);
        setTotalPages(response.data.totalPages || 1);
        setSortedProducts(response.data.prodcts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, [filter, page, searchText]);
  useEffect(() => {
    let filteredProducts = [...products];
    if (filter.brand) {
      filteredProducts = filteredProducts.filter(
        (product) => product.BrandName === filter.brand
      );
    }
    if (filter.category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.Category === filter.category
      );
    }
    if (filter.priceFrom || filter.priceTo) {
      filteredProducts = filteredProducts.filter((product) => {
        const price = product.Price;
        return (
          (!filter.priceFrom || price >= filter.priceFrom) &&
          (!filter.priceTo || price <= filter.priceTo)
        );
      });
    }
    setSortedProducts(filteredProducts);
  }, [filter, products]);
  const handleFilter = (criteria) => {
    setFilter(criteria);
  };
  const handleSort = (sortOption) => {
    let sortedArray = [...products];
    if (sortOption === "lowToHigh") {
      sortedArray.sort((a, b) => a.Price - b.Price);
    } else if (sortOption === "highToLow") {
      sortedArray.sort((a, b) => b.Price - a.Price);
    } else if (sortOption === "newProduct") {
      sortedArray.sort((a, b) => new Date(b.Date) - new Date(a.Date));
    }
    setSortedProducts(sortedArray);
  };

  const handleSearch = (searchValue) => {
    // console.log('search value receive:', searchValue)
    setSearchText(searchValue); 
  };

//   console.log(sortedProducts);
  return (
    <div className="px-6 md:px-20 min-h-screen">
      <Searchbar onSearch={handleSearch} />
      <div className="flex flex-col md:flex-row mb-6 justify-between items-center md:items-end">
        <Filter onFilter={handleFilter} />
        <Sort handleSort={handleSort} />
      </div>
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {sortedProducts?.map((data) => (
            <div
              key={data?._id}
              className="h-[250px] w-[180px] p-3 border flex flex-col justify-between"
            >
              <div className="h-1/2 w-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={data?.Image}
                  alt=""
                />
              </div>
              <div>
                <p className="text-lg font-medium text-[#153448]">{data?.Name.split(' ').slice(0, 2).join(' ')}...</p>
                {/* <p className="">
            {data?.Description}
          </p> */}
                <h5 className="text-gray-600">Price: {data?.Price}$</h5>
                <span>{data?.Rating}</span>
                <div className="flex justify-center py-2">
                  <button className="px-3 py-1 bg-[#3C5B6F] text-white rounded-md inline-block">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-10">
      <Paginations page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </div>
  );
};

export default Products;
