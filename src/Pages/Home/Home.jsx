import React from "react";
import HeroSection from "./HeroSection";
import CTA from "./CTA";
import ServicesSection from "./AboutService";
import AssetManagementSection from "./AssetManagement";
import VideoSection from "./VideoSection";
import AboutDetailSection from "./Carousel/AboutDetailSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <VideoSection />
      <AboutDetailSection />
      <ServicesSection />
      <AssetManagementSection />
      <CTA />
    </div>
  );
};

export default Home;
