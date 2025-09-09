"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SimpleCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      id: 1,
      image: "/images/carasouel.png",
    },
    {
      id: 2,
      image: "/images/carasouel1.png",
    },
    {
      id: 3,
      image: "/images/carasouel1.png",
    },
  ];

  // Animation trigger on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-play carousel every 800ms
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full bg-white relative min-h-[50vh] md:min-h-[60vh] lg:min-h-screen">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main carousel container */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          {/* Carousel images */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-800 ease-in-out ${
                index === currentSlide
                  ? `opacity-100 translate-x-0 ${
                      isVisible ? "animate-fade-in" : "opacity-0"
                    }`
                  : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
              style={{
                animationDelay: "5000ms",
                animationTimingFunction: "ease-in-out",
                animationDuration: "5000ms",
              }}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ))}

          {/* Navigation arrows - bottom right */}
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex items-center space-x-1">
            {/* Previous arrow */}
            <button
              onClick={prevSlide}
              className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-full group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>

            {/* Divider */}
            <div className="w-px h-6 sm:h-8 bg-white/30 mx-1 sm:mx-2"></div>

            {/* Next arrow */}
            <button
              onClick={nextSlide}
              className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-full group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex space-x-1.5 sm:space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-110"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCarousel;
