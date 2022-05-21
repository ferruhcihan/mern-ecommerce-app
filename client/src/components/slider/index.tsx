import { useState } from "react";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";

const sliderItems = [
  {
    id: "slider-1",
    bg: "bg-[#ffc0cb]",
    img: "https://i.dlpng.com/static/png/6867967_preview.png",
    title: "Pink 1",
    desc: "Pink color description",
  },
  {
    id: "slider-2",
    bg: "bg-[#ffc0cb]",
    img: "https://i.dlpng.com/static/png/6867967_preview.png",
    title: "Pink 2",
    desc: "Pink color description",
  },
  {
    id: "slider-3",
    bg: "bg-[#ffc0cb]",
    img: "https://i.dlpng.com/static/png/6867967_preview.png",
    title: "Pink 3",
    desc: "Pink color description",
  },
];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction: string) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const translateX = () => {
    const value = slideIndex * -100;
    return `translate-x-[${value}vw]`;
  };

  return (
    <div className="relative hidden w-full h-screen overflow-hidden sm:flex ">
      <div
        onClick={() => handleClick("left")}
        className="w-12 h-12 bg-[#fff7f7] rounded-lg flex items-center justify-center absolute top-0 bottom-0 left-2 m-auto cursor-pointer opacity-50 z-10"
      >
        <MdOutlineArrowLeft />
      </div>
      <div
        className={`flex h-full transition-all ease-in-out duration-1000 ${translateX()}`}
      >
        {sliderItems.map((item: any) => (
          <div
            key={item.id}
            className={`w-screen flex items-center ${item.bg}`}
          >
            <div className="flex flex-1 h-full">
              <img src={item.img} alt="item-img" className="h-4/5" />
            </div>
            <div className="flex flex-col flex-1 p-12">
              <h1 className="text-7xl">{item.title}</h1>
              <p className="py-12 text-xl font-medium tracking-wide">
                {item.desc}
              </p>
              <button className="p-3 text-xl bg-transparent border-2 border-black cursor-pointer w-max">
                SHOW NOW
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={() => handleClick("right")}
        className="w-12 h-12 bg-[#fff7f7] rounded-lg flex items-center justify-center absolute top-0 bottom-0 right-2 m-auto cursor-pointer opacity-50 z-10"
      >
        <MdOutlineArrowRight />
      </div>
    </div>
  );
};

export default Slider;
