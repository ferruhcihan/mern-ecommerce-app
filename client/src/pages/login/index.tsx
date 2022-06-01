/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Input from "../../components/Input";

const Login = () => {
  return (
    <div
      className="flex w-screen h-screen"
      style={{
        background:
          "linear-gradient(#FFFFFF80,#FFFFFF80), url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center",
      }}
    >
      <div className="w-3/4 p-5 bg-white sm:w-1/4">
        <h1 className="text-2xl font-light">SIGN IN</h1>
        <form className="flex flex-wrap">
          <Input placeholder="username" />
          <Input placeholder="password" />
          <button className="w-2/5 px-5 py-4 mb-2 text-white cursor-pointer bg-teal">
            LOGIN
          </button>
          <a className="my-2 text-sm underline cursor-pointer" href="#">
            DO NOT YOU REMEMBER THE PASSWORD?
          </a>
          <a className="my-2 text-sm underline cursor-pointer" href="#">
            CREATE A NEW ACCOUNT
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
