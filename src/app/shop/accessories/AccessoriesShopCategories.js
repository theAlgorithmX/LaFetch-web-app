"use client";
import React, { useState, useEffect } from "react";
import useCategories from "@/hooks/useCategories";

const AccessoriesShopCategories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const query = "type=category&gender=3";
  const fetchCategories = useCategories(query);

  useEffect(() => {
    if (fetchCategories && fetchCategories.length > 0) {
      setIsLoading(false);
    }
  }, [fetchCategories]);

  const CategorySkeleton = () => (
    <div className="flex flex-col items-center">
      <div className="w-[195px] h-[195px] bg-gray-200 rounded-full animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mt-4 animate-pulse"></div>
    </div>
  );

  return (
    <section className="w-full py-8 md:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-2 md:px-0">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black tracking-wider">
            SHOP BY CATEGORIES
          </h2>
        </div>

        {/* Categories Grid (no scroll) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <CategorySkeleton key={index} />
              ))
            : [...fetchCategories].slice(-6).map((category) => (
                <div key={category.id} className="flex flex-col items-center">
                  <div className="relative group cursor-pointer transform transition-transform duration-300">
                    <div className=" w-[120px] h-[120px] md:w-[195px] md:h-[195px] rounded-full overflow-hidden bg-gray-100">
                      <img
                        src={category.image || "/placeholder.png"}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  {/* Category Name */}
                  <h3 className="text-black text-center font-semibold text-sm md:text-base lg:text-lg mt-4 px-4 leading-tight">
                    {category.name}
                  </h3>
                </div>
              ))}
        </div>

        {/* View More Button */}
        {/* View More Button */}
        <div className="flex justify-center mt-8 md:mt-12">
          <button className="group bg-black text-white px-8 py-3 rounded-none font-medium cursor-pointer transition-colors duration-200 text-sm md:text-base flex items-center">
            View more
            <span className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-5px] group-hover:translate-x-0 transition-all duration-300">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesShopCategories;
