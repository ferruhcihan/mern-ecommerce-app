import React from "react";

const Register = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-3/4 p-5 bg-white sm:w-1/4">
        <h1 className="text-2xl font-light">CREATE AN ACCOUNT</h1>
        <form className="flex flex-wrap">
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
