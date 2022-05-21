import CategoryItem from "./categoryItem";

const categories = [
  { id: "category-1" },
  { id: "category-2" },
  { id: "category-3" },
];

const Categories = () => {
  return (
    <div className="flex flex-col justify-between p-0 sm:p-5 sm:flex-row ">
      {categories.map((item: any) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Categories;
