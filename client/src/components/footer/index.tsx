import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      {/* LEFT */}
      <div className="flex flex-col flex-1 p-5">
        <h1>FC</h1>
        <p className="my-5">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="flex"></div>
      </div>
      {/* RIGHT */}
    </div>
  );
};

export default Footer;
