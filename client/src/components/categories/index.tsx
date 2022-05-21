import React from "react";
import CategoryItem from "./categoryItem";

const categories = [{ id: "category-1" }];

const Categories = () => {
  return (
    <div>
      {categories.map((item: any) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Categories;
