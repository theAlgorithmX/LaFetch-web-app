"use client";

import FilterDropdown from "@/components/Filter";
import ListingCard from "@/components/ListingCard";
import { useState } from "react";
import useProducts from "@/hooks/useProducts";

const ShopByCategoriesPage = () => {
  const [openFilters, setOpenFilters] = useState({});
  const products = useProducts(); // Using the same hook as Newdrop.js

  const toggleFilter = (filterName) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const filterCategories = [
    { name: "Filters", options: [] },
    {
      name: "Category",
      options: ["Tops", "Dresses", "Bottoms", "Accessories"],
    },
    { name: "Size", options: ["XS", "S", "M", "L", "XL", "XXL"] },
    { name: "Brand", options: ["Valkyrie", "Nike", "Adidas", "Puma"] },
    {
      name: "Price",
      options: ["Under ₹500", "₹500-₹1000", "₹1000-₹2000", "Above ₹2000"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto flex">
        {/* Sidebar Filters */}
        <div className="w-64 bg-white p-6 border-r border-gray-200 h-screen overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
              SHOP BY CATEGORIES
            </h2>
          </div>

          <div className="space-y-0">
            {filterCategories.map((category) => (
              <FilterDropdown
                key={category.name}
                title={category.name}
                options={category.options}
                isOpen={openFilters[category.name]}
                onToggle={() => toggleFilter(category.name)}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <span className="text-sm text-black">Sort by:</span>
              <select className="text-sm  text-black border border-gray-300 rounded px-3 py-1">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Customer Rating</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
            {products?.map((product) => {
              const originalPrice = product.mrp;
              const currentPrice = product.basePrice;

              // calculate discount dynamically
              const discountPercentage =
                originalPrice && currentPrice
                  ? Math.round(
                      ((originalPrice - currentPrice) / originalPrice) * 100
                    )
                  : 0;

              return (
                <ListingCard
                  key={product.id}
                  images={product.imageUrls}
                  title={product.title}
                  brand={product.brand || "zara"}
                  rating={product.rating || 3.5}
                  reviewCount={product.reviewCount || "0"}
                  currentPrice={currentPrice}
                  originalPrice={originalPrice}
                  discountPercentage={`${discountPercentage}%`}
                  id={product.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategoriesPage;
