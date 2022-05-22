import React from "react";

const CategoryItem = ({ item }: any) => {
  return (
    <div className="flex m-1 h-[70vh] relative">
      <img
        src={item.img}
        alt="categoryItemImg"
        className="w-full h-[20vh] sm:h-full object-cover "
      />
      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full"></div>
    </div>
  );
};

export default CategoryItem;
