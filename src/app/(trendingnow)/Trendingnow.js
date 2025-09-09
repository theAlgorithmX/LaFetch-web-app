"use client";
import ProductCard from "@/components/Card";

const TrendingNowSection = () => {
  const products = [
    {
      id: 1,
      name: "Brown Velvet Jacket",
      category: "Tops for Women",
      price: 1235,
      image: "/images/sample-product1.png",
    },
    {
      id: 2,
      name: "Casual Knit Sweater",
      category: "Tops for Women",
      price: 1235,
      image: "/images/sample-product2.png",
    },
    {
      id: 3,
      name: "Ribbed Tank Top",
      category: "Tops for Women",
      price: 1235,
      image: "/images/sample-product3.png",
    },
    {
      id: 4,
      name: "Plaid Flannel Shirt",
      category: "T-Shirt For Men",
      price: 1235,
      image: "/images/sample-product1.png",
    },
    // {
    //   id: 5,
    //   name: "Cotton V-Neck Tee",
    //   category: "Tops for Women",
    //   price: 1235,
    //   image: "/images/sample-product1.png",
    // },
    // {
    //   id: 6,
    //   name: "Oversized Hoodie",
    //   category: "T-Shirt For Men",
    //   price: 1235,
    //   image: "/images/sample-product1.png",
    // },
    // {
    //   id: 7,
    //   name: "Silk Blouse",
    //   category: "Tops for Women",
    //   price: 1235,
    //   image: "/images/sample-product1.png",
    // },
    // {
    //   id: 8,
    //   name: "Denim Jacket",
    //   category: "T-Shirt For Men",
    //   price: 1235,
    //   image: "/images/sample-product1.png",
    // },
    // {
    //   id: 9,
    //   name: "Denim Jacket",
    //   category: "T-Shirt For Men",
    //   price: 1235,
    //   image: "/images/sample-product1.png",
    // },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12 tracking-wide">
          TRENDING NOW
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-[20px] justify-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNowSection;
