"use client";
import Link from "next/link";
import ProductCard from "@/components/Card";
import useProducts from "@/hooks/useProducts";
import Image from "next/image";

const NewInSection = () => {
  const fetchproducts = useProducts();
  const topProducts = fetchproducts?.slice(0, 8) || []; // Only 8 products

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12 tracking-wide">
          NEW IN
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[20px] justify-items-center">
          {topProducts.map((product, index) => {
            const isLast = index === topProducts.length - 1;

            if (isLast) {
              return (
                <div key={product.id} className="w-full">
                  <div className="relative w-[160px] h-[240px] md:w-[300px] md:h-[380px]">
                    {/* Product Image + Overlay */}
                    <Image
                      src={product.imageUrls?.[0]}
                      alt={product.title}
                      fill
                      className=" object-cover "
                    />
                    <Link
                      href="/products" // explore page
                      className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold text-lg"
                    >
                      Explore All →
                    </Link>
                  </div>
                  {/* Keep title and price as normal below image */}
                  <h3 className="mt-2 text-sm md:text-lg  text-black text-center">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    Rs. {product.basePrice}
                  </p>
                </div>
              );
            }

            // Default card
            return (
              <ProductCard
                key={product.id}
                images={product.imageUrls}
                title={product.title}
                price={product.basePrice}
                id={product.id}
                product={product}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewInSection;
