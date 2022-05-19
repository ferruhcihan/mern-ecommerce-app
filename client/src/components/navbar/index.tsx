import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="h-12 sm:h-16">
      <div className="py-3 px-0 sm:px-5 flex items-center justify-between">
        <div className="flex flex-1 items-center">
          <span className="hidden sm:flex text-sm cursor-pointer">EN</span>
          <div className="flex items-center ml-6 p-2 border-[0.5px] border-gray1">
            <input
              type="text"
              className="border-none w-12 sm:w-full"
              placeholder="Search"
            />
            <BiSearch />
          </div>
        </div>
        <div className="flex flex-1 text-center">
          <h1 className="font-bold text-xl sm:text-base">FC</h1>
        </div>
        <div className="flex flex-2 sm:flex-1 items-center justify-center sm:justify-end ">
          <div className="flex text-xs sm:text-sm ml-2 sm:ml-6 cursor-pointer">
            REGISTER
          </div>
          <div className="flex text-xs sm:text-sm ml-2 sm:ml-6 cursor-pointer">
            SIGN IN
          </div>
          <div className="flex text-xs sm:text-sm ml-2 sm:ml-6 cursor-pointer">
            <AiOutlineShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
