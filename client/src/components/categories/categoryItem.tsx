import React from "react";

const CategoryItem = ({ item }: any) => {
  return (
    <div className="flex m-1 h-[70vh] relative">
      <img
        src={item.img}
        alt="categoryItemImg"
        className="w-full h-[20vh] sm:h-full object-cover "
      />
      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
        <h1 className="mb-5 text-white">{item.title}</h1>
        <button className="p-3 font-semibold text-gray-400 bg-white cursor-pointer">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
