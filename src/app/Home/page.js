import React from "react";
import NewDropsSection from "../(new-drops)/Newdrop";
import HomePage from "../(banner)/Banner";
import CategorySection from "../(categorycard)/Categorycard";
import SimpleCarousel from "../(carousel)/Carousel";
import FashionGrid from "../(blog)/Blog";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <NewDropsSection />
      <CategorySection />
      <NewDropsSection />
      <SimpleCarousel />
      <FashionGrid />
    </div>
  );
};

export default page;
