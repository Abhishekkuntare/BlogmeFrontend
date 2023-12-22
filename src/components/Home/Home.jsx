import React from "react";
import "./home.css";
import HomeCom1 from "./HomeCom1";
import HomeCom2 from "./HomeCom2";
import HomeCom0 from "./HomeCom0";
import Testimonials from "../Testimonials/Testimonials";
const Home = () => {
  return (
    <section className="home">
      <HomeCom0 />
      <HomeCom1 />
      <HomeCom2 />
      <Testimonials />
    </section>
  );
};

export default Home;
