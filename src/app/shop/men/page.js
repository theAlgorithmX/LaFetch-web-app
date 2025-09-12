import React from "react";

import Footer from "@/components/footer";
import FashionGrid from "@/app/(blog)/Blog";
import MenBanner from "./LandingMenBanner";
import MenNewInSection from "./MenNewIn";
import MenShopCategories from "./MenShopCategories";
import MenCollectionSection from "./MenCollections";
import Navbar from "@/components/Navbar";
import MenCarousel from "./MenCarousel";
import TrendingBlog from "@/app/(blog)/Blog";

const page = () => {
  return (
    <div>
      <Navbar />
      <MenBanner />
      <MenNewInSection />
      <MenShopCategories />
      <MenCarousel />
      <MenCollectionSection />
      <TrendingBlog />
      <Footer />
    </div>
  );
};

export default page;
