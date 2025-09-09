import { useState } from "react";
import { X, Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";

const ProductModal = ({ product, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white max-w-4xl w-[956px] max-h-[588px] overflow-y-auto">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2 aspect-square bg-gray-50 relative">
            {/* Heart Button moved here */}
            <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md z-10">
              <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" />
            </button>

            <Image
              src={product.image}
              alt={product.name}
              width={350}
              height={350}
              className=" object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-6">
            {/* Header with Close Button */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                  {product.name}
                </h2>
                <p className="text-xl text-gray-900">
                  Rs. {product.price.toLocaleString()}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Description */}
            <div className="mb-4">
              <p className="text-gray-600 mb-1 text-sm leading-snug">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                Eiusmod Tempor Incididunt
              </p>
              <button className="text-black font-medium underline text-sm">
                View More
              </button>
            </div>

            {/* Size Selection */}
            <div className="mb-4">
              <label className="block text-gray-900 font-medium mb-2 text-sm">
                Size: {selectedSize}
              </label>
              <div className="relative w-20">
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-2 py-1 appearance-none bg-white focus:outline-none focus:border-black text-sm"
                >
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg
                    className="w-3 h-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mb-4">
              <label className="block text-gray-900 font-medium mb-2 text-sm">
                Quantity:
              </label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-300 rounded-md w-24">
                  <button
                    onClick={() => handleQuantityChange("decrement")}
                    className="p-1 hover:bg-gray-50"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4 text-gray-600" />
                  </button>
                  <span className="flex-1 text-center py-1 border-x border-gray-300 text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange("increment")}
                    className="p-1 hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <button className="bg-white border border-black text-black py-2 px-5 rounded-md hover:bg-gray-50 transition-colors font-medium text-sm w-auto">
                  Add to cart
                </button>
              </div>
            </div>

            {/* Buy Now Button */}
            <div>
              <button className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors font-medium text-sm">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
