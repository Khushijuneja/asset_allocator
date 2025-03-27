import React from "react";
import HeroSection from "./HeroSection";
import CTA from "./CTA";
import ServicesSection from "./AboutService";
import AssetManagementSection from "./AssetManagement";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AssetManagementSection />
      <CTA />
    </div>
  );
};

export default Home;
