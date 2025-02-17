import About from "@/components/About";
import { CarouselComponent } from "@/components/CarouselComponent";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { NavbarComponent } from "@/components/Navbar";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="p-1 md:p-6">
        {/* <CarouselComponent /> */}
        <About />
      </div>
      
    </div>
  );
};

export default Home;
