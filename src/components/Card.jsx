const Card = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 ">
      <div className="h-[250px] w-[180px] p-3 border flex flex-col justify-between">
        <div className="h-1/2 w-full overflow-hidden">
          <img
          className="h-full w-full object-cover"
            src="https://tse4.mm.bing.net/th?id=OIP.LLs4MQaIdVfxZNfmk0YkQQHaH3&pid=Api&P=0&h=220"
            alt=""
          />
        </div>
        <div>
          <p className="text-lg font-medium">Product name</p>
          {/* <p className="">
            Description: Lorem ipsum dolor, sit amet consectetur adipisicing
            elit.
          </p> */}
          <h5 className="text-gray-600">Price: 120$</h5>
          <span>ratings</span>
          <div className="flex justify-center py-2">
            <button className="px-3 py-1 bg-orange-400 font-medium inline-block">Buy now</button>
          </div>
        </div>
      </div>
      <div className="h-[250px] w-[180px] p-3 border flex flex-col justify-between">
        <div className="h-1/2 w-full overflow-hidden">
          <img
          className="h-full w-full object-cover"
            src="https://tse4.mm.bing.net/th?id=OIP.LLs4MQaIdVfxZNfmk0YkQQHaH3&pid=Api&P=0&h=220"
            alt=""
          />
        </div>
        <div>
          <p className="text-lg font-medium">Product name</p>
          {/* <p className="">
            Description: Lorem ipsum dolor, sit amet consectetur adipisicing
            elit.
          </p> */}
          <h5 className="text-gray-600">Price: 120$</h5>
          <span>ratings</span>
          <div className="flex justify-center py-2">
            <button className="px-3 py-1 bg-orange-400 font-medium inline-block">Buy now</button>
          </div>
        </div>
      </div>
      <div className="h-[250px] w-[180px] p-3 border flex flex-col justify-between">
        <div className="h-1/2 w-full overflow-hidden">
          <img
          className="h-full w-full object-cover"
            src="https://tse4.mm.bing.net/th?id=OIP.LLs4MQaIdVfxZNfmk0YkQQHaH3&pid=Api&P=0&h=220"
            alt=""
          />
        </div>
        <div>
          <p className="text-lg font-medium">Product name</p>
          {/* <p className="">
            Description: Lorem ipsum dolor, sit amet consectetur adipisicing
            elit.
          </p> */}
          <h5 className="text-gray-600">Price: 120$</h5>
          <span>ratings</span>
          <div className="flex justify-center py-2">
            <button className="px-3 py-1 bg-orange-400 font-medium inline-block">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
