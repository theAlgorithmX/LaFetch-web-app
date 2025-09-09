import React from "react";

const FashionGrid = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* First Row */}
      <div className="flex flex-col md:flex-row max-w-full">
        {/* First Column */}
        <div className="w-full md:w-[720px] h-[300px] md:h-[519px] relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0"></div>
          <img
            src="images/blog1.png"
            alt="Model with cap"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-6 left-6 text-white">
            <h2 className="text-xl md:text-3xl font-bold mb-2">
              Brown Velvet Jacket Are A Trend Now?
            </h2>
            <p className="text-xs md:text-sm opacity-90 max-w-md">
              Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
              Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa
              Quae Ab
            </p>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-full md:w-[440px] h-[300px] md:h-[519px] relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0"></div>
          <img
            src="images/blog2.png"
            alt="Woman with pink beanie"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-14 left-6 text-white">
            <h2 className="text-lg md:text-2xl font-bold mb-2">
              Hat Culture Emerged From
            </h2>
            <p className="text-xs md:text-sm opacity-90">
              Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
              Quae Ab
            </p>
          </div>
        </div>

        {/* Third Column */}
        <div className="w-full md:w-[440px] h-[300px] md:h-[519px] relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0"></div>
          <img
            src="images/blog3.png"
            alt="Man in sweater"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-lg md:text-2xl font-bold mb-2">
              Sweaters Collection
            </h2>
            <p className="text-xs md:text-sm opacity-90">
              Sed Ut Perspiciatis Unde Omnis Iste Natus Sed Ut Perspiciatis Unde
              Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque
              Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab
            </p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row max-w-full">
        {/* First Column */}
        <div className="w-full md:w-[350px] h-[300px] md:h-[550px] relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0"></div>
          <img
            src="images/blog4.png"
            alt="Emerging trends model"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-lg md:text-2xl font-bold mb-2">
              Emerging Trends
            </h2>
            <p className="text-xs md:text-sm opacity-90">
              Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
            </p>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-full md:w-[800px] h-[300px] md:h-[550px] relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0"></div>
          <img
            src="images/blog5.png"
            alt="Woman with brown hat"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-[20%] left-8 transform -translate-y-1/2 text-white max-w-md">
            <h2 className="text-xl md:text-4xl font-bold mb-4 text-amber-900">
              Hat Culture Emerged From
            </h2>
            <p className="text-xs md:text-sm opacity-90 text-gray-800">
              Sed Ut Perspiciatis Unde Omnis Iste Natus Sed Ut Perspiciatis Unde
              Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque
              Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab
            </p>
          </div>
        </div>

        {/* Third Column */}
        <div className="w-full md:w-[450px] h-[300px] md:h-[550px] relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0"></div>
          <img
            src="images/blog6.png"
            alt="Luxury bags"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-lg md:text-2xl font-bold mb-2">Bag Culture</h2>
            <p className="text-xs md:text-sm opacity-90">
              Sed Ut Perspiciatis Unde Omnis Iste Natus Sed Ut Perspiciatis Unde
              Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque
              Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionGrid;
