import { MdOutlineArrowLeft } from "react-icons/md";

const Slider = () => {
  return (
    <div className="relative hidden w-full h-screen overflow-hidden sm:flex ">
      <div className="w-12 h-12 bg-[#fff7f7] rounded-lg flex items-center justify-center absolute top-0 bottom-0 m-auto cursor-pointer opacity-50 z-10">
        <MdOutlineArrowLeft />
      </div>
      <div className="flex h-full transition-all duration-300 ease-in-out translate-x-4">
        wrapper
      </div>
    </div>
  );
};

export default Slider;
