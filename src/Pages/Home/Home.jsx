import React from "react";
import HeroSection from "./HeroSection";
import CTA from "./CTA";
import ServicesSection from "./AboutService";
import AssetManagementSection from "./AssetManagement";
import VideoSection from "./VideoSection";
import AboutDetailSection from "./Carousel/AboutDetailSection";
import Testimonials from "./Testimonials";
import Expertise from "./Expertise";
import LogoGrid from "./LogoGrid";
import DepartmentSection from "./Process";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <VideoSection />
      <AboutDetailSection />
      <Expertise />
      <LogoGrid />
      <ServicesSection />
      <AssetManagementSection />
      <DepartmentSection />
      <CTA />
      <Testimonials />
    </div>
  );
};

export default Home;
