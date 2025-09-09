import React from "react";
import NewDropsSection from "../(new-drops)/Newdrop";
import HomePage from "../(banner)/Banner";
import CategorySection from "../(categorycard)/Categorycard";
import SimpleCarousel from "../(carousel)/Carousel";
import FashionGrid from "../(blog)/Blog";
import Navbar from "@/components/Navbar";
import TrendingNowSection from "../(trendingnow)/Trendingnow";
import Footer from "@/components/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <NewDropsSection />
      <CategorySection />
      <TrendingNowSection />
      <SimpleCarousel />
      <FashionGrid />
      <Footer />
    </div>
  );
};

export default page;
