import React from "react";
import HeroSection from "./HeroSection";
import CTA from "./CTA";
import ServicesSection from "./AboutService";
import AssetManagementSection from "./AssetManagement";
import VideoSection from "./VideoSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <VideoSection />
      <AssetManagementSection />
      <CTA />
    </div>
  );
};

export default Home;
