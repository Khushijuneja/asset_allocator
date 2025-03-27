import React from "react";
import HeroSection from "./HeroSection";
import CTA from "./CTA";
import ServicesSection from "./AboutService";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <CTA />
    </div>
  );
};

export default Home;
