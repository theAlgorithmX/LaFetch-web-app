import React from "react";
import WomenBanner from "./LandingWomenBanner";
import Navbar from "@/components/Navbar";
import NewInSection from "./NewIn";
import ShopCategories from "./ShopCategories";
import CollectionSection from "./Collections";
import Footer from "@/components/footer";

import WomenCarousel from "./WomenCarousel";
import TrendingBlog from "@/app/(blog)/Blog";

const page = () => {
  return (
    <div>
      <Navbar />
      <WomenBanner />
      <NewInSection />
      <ShopCategories />
      <WomenCarousel />
      <CollectionSection />
      <TrendingBlog />
      <Footer />
    </div>
  );
};

export default page;
