import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import TrendingBlog from "@/app/(blog)/Blog";
import AccessoriesBanner from "./LandingAccessoriesBanner";
import AccessoriesNewInSection from "./AccessoriesNewIn";
import AccessoriesShopCategories from "./AccessoriesShopCategories";
import AccessoriesCarousel from "./AccessoriesCarousel";
import AccessoriesCollectionSection from "./AccessoriesCollections";

const page = () => {
  return (
    <div>
      <Navbar />
      <AccessoriesBanner />
      <AccessoriesNewInSection />
      <AccessoriesShopCategories />
      <AccessoriesCarousel />
      <AccessoriesCollectionSection />
      <TrendingBlog />
      <Footer />
    </div>
  );
};

export default page;
