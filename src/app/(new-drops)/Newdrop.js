"use client";
import ProductCard from "@/components/Card";

import useProducts from "@/hooks/useProducts";

const NewDropsSection = () => {
  const fetchproducts = useProducts();

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12 tracking-wide">
          NEW DROPS
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-[20px] justify-items-center">
          {fetchproducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewDropsSection;
