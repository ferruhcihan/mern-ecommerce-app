import React from "react";

const Product = () => {
  return (
    <div className="flex flex-1 m-1 min-w-[280px] h-[350px] justify-center items-center relative bg-[#f5fbfd] hover:opacity-100 ">
      <div className="w-[200px] h-[200px] rounded-full bg-white absolute" />
      <img className="z-10 h-3/4" src="" alt="product-img" />
      <div className="w-full h-full opacity-0 absolute top-0 left-0 bg-[#00000032] z-20 flex items-center justify-center transition-all ease-in-out duration-500 cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center m-2 transition-all ease-in-out duration-500 hover:bg-[#e9f5f5] hover:scale-110"></div>
      </div>
    </div>
  );
};

export default Product;
