import React from "react";
import { FiSend } from "react-icons/fi";

const Newsletter = () => {
  return (
    <div className="h-[60vh] bg-[#fcf5f5] flex flex-col justify-center items-center">
      <h1 className="mb-5 text-7xl">Newsletter</h1>
      <div className="mb-5 text-2xl font-light text-center sm:text-left">
        Get timely updates from your favorite products.
      </div>
      <div className="w-4/5 sm:w-1/2 h-10 bg-white flex justify-between border-[1px] border-gray-100 ">
        <input className="flex pl-5" />
        <button className="flex text-white bg-teal">
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
