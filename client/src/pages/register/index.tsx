import React from "react";
import Input from "../../components/Input";

const Register = () => {
  return (
    <div
      className="flex w-screen h-screen"
      style={{
        background:
          "linear-gradient(#FFFFFF80,#FFFFFF80), url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center",
      }}
    >
      <div className="w-3/4 p-5 bg-white sm:w-1/4">
        <h1 className="text-2xl font-light">CREATE AN ACCOUNT</h1>
        <form className="flex flex-wrap">
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <span className="my-5 text-sm">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="w-2/5 px-5 py-4 text-white cursor-pointer bg-teal">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
