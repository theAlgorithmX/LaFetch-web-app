import React from "react";
import NewDropsSection from "../(new-drops)/Newdrop";
import HomePage from "../(banner)/Banner";
import CategorySection from "../(categorycard)/Categorycard";
import FashionGrid from "../(blog)/Blog";
import Navbar from "@/components/Navbar";
import TrendingNowSection from "../(trendingnow)/Trendingnow";
import Footer from "@/components/footer";
import PhoneAuthModal from "@/components/LoginModal";
import HomeCarousel from "../(carousel)/Carousel";
import TrendingBlog from "../(blog)/Blog";

const page = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <NewDropsSection />
      <CategorySection />
      <TrendingNowSection />
      <HomeCarousel />
      <TrendingBlog />
      <PhoneAuthModal />
      <Footer />
    </div>
  );
};

export default page;
