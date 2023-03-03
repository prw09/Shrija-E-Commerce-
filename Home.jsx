import React from "react";
import Address from "../components/Address";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <Address/>
      <Footer/>
    </div>
  );
};

export default Home;
