"use client";
import ProductCard from "@/components/Card";
import useCollection from "@/hooks/useCollection";

const AccessoriesCollectionSection = () => {
  const query = "gender=3";
  const collections = useCollection(query);

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {collections?.map((collection) => (
          <section key={collection.id} className="mb-16">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12 tracking-wide">
              {collection.name} {/* dynamic title */}
            </h2>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[20px] justify-items-center">
              {collection.products?.map((product) => {
                // Destructure the product properties
                const images = product.imageUrls;
                const title = product.title;
                const price = product.basePrice;
                const id = product.id;

                return (
                  <ProductCard
                    key={id}
                    images={images}
                    title={title}
                    price={price}
                    id={id}
                    // Pass the full product object if needed for modal
                    product={product}
                  />
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AccessoriesCollectionSection;
