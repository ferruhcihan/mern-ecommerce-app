import React from "react";
import Announcement from "../../components/announcement";
import Categories from "../../components/categories";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Newsletter from "../../components/newsletter";
import Products from "../../components/products";
import Slider from "../../components/slider";

const Home = () => {
  return (
    <div className="">
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
