import { useState } from "react";
import { Eye, ShoppingBag, Zap } from "lucide-react";
import ProductModal from "./Modal";
import Image from "next/image";

const ProductCard = ({ images, title, price, id, product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(images, "images");

  return (
    <>
      <div className="relative bg-white overflow-hidden w-[160px] h-[400px] md:w-[300px] md:h-[480px]">
        {/* Product Image */}
        <div className="relative bg-gray-50 overflow-hidden group w-[160px] h-[300px]  md:w-[300px] md:h-[380px]">
          <Image
            src={
              images && images.length > 0
                ? images[0]
                : "https://cdn.shopify.com/s/files/1/0553/6186/3863/products/0I1A6958copy-pichi.jpg?v=1617717071"
            }
            alt={title || "product-img"}
            width={500}
            height={500}
            className=" object-cover transition-transform duration-500 group-hover:scale-120"
          />

          {/* Action Icons */}
          <div className="absolute top-4 right-2 flex flex-col gap-2 sm:gap-3 md:gap-4">
            {/* Eye Icon */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
            >
              <Eye size={16} sm={18} md={20} className="text-gray-700 " />
            </button>

            {/* Bag Icon */}
            <button className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition cursor-pointer">
              <ShoppingBag
                size={16}
                sm={18}
                md={20}
                className="text-gray-700"
              />
            </button>

            {/* Flash Icon */}
            <button className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition cursor-pointer">
              <Zap size={16} sm={18} md={20} className="text-purple-500" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="px-6 py-4 text-center" style={{ height: "80px" }}>
          <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600 text-sm">Rs. {price}</p>
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
