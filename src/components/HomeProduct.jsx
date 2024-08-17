import axios from "axios";
import { useEffect, useState } from "react";

const HomeProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://online-shop-server-xi.vercel.app/products");
        setProducts(response.data.prodcts);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchData();
  }, []);
  // console.log(products)
  return (
    <div className="pb-20 px-6 md:px-20">
      <h2 className="text-[#153448] text-3xl text-center py-8 font-medium ">Products</h2>
     <div className="flex justify-center items-center ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((d) => (
            <div
              key={d?._id}
              className="h-[250px] w-[180px] p-3 border flex flex-col justify-between"
            >
              <div className="h-1/2 w-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={d?.Image}
                  alt=""
                />
              </div>
              <div>
                <p className="text-lg font-medium text-[#153448]">{d?.Name}</p>
                {/* <p className="">
            {data?.Description}
          </p> */}
                <h5 className="text-gray-600">Price: {d?.Price}$</h5>
                <span>{d?.Rating}</span>
                <div className="flex justify-center py-2">
                  <button className="px-3 py-1 bg-[#3C5B6F] rounded-md text-white font-medium inline-block">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
