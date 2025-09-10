import { useState } from "react";
import { Eye, ShoppingBag, Zap } from "lucide-react";
import ProductModal from "./Modal";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(product?.imageUrls, "product?.imageUrls");
  return (
    <>
      <div className="relative bg-white overflow-hidden w-[160px] h-[400px] md:w-[300px] md:h-[480px]">
        {/* Product Image */}
        <div className="relative bg-gray-50 overflow-hidden group w-[160px] h-[300px]  md:w-[300px] md:h-[380px]">
          <Image
            src={
              product?.imageUrls
                ? product?.imageUrls[0]
                : "https://cdn.shopify.com/s/files/1/0553/6186/3863/products/0I1A6958copy-pichi.jpg?v=1617717071"
            }
            alt={product?.title || "product-img"}
            width={500}
            height={500}
            className=" object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Action Icons */}
          <div className="absolute top-4 right-2 flex flex-col gap-2">
            {/* Eye Icon */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-[50px] h-[50px] rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition "
            >
              <Eye size={20} className="text-gray-700" />
            </button>

            {/* Bag Icon */}
            <button className="w-[50px] h-[50px] rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition">
              <ShoppingBag size={20} className="text-gray-700" />
            </button>

            {/* Flash Icon */}
            <button className="w-[50px] h-[50px] rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition">
              <Zap size={20} className="text-purple-500" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="px-6 py-4 text-center" style={{ height: "80px" }}>
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            {product.title}
          </h3>
          <p className="text-gray-600 text-sm">Rs. {product.basePrice}</p>
        </div>
      </div>

      {/* Modal */}
      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductCard;
