"use client";
import React, { useState } from "react";
import { Instagram, Twitter, Facebook, MessageCircle } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = () => {
    if (email) {
      // Handle newsletter subscription
      console.log("Newsletter subscription:", email);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0e100d] text-white">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 mb-8 px-[20px]">
          {/* Logo */}
          <div className="lg:col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Image
                src="/images/lafetch.png"
                alt="LAFETCH Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          {/* Navigation Column 1 */}
          <div className="space-y-3">
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Welcome to La Fetch
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Announcements
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  What's new
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2 */}
          <div className="space-y-3">
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Discover now
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  La fetch quick
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3 */}
          <div className="space-y-3">
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Terms & conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Shipping policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Cancellation policy
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 4 */}
          <div className="space-y-3">
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Product Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Brand Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Email Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column (Column 5) */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">
              Subscribe to our newsletter
            </h3>
            <div className="flex flex-col gap-4 max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Write your email here"
                    className="w-full px-4 py-3 bg-gray-800  rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 text-sm"
                  />
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-14 ">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              ©2025 Powered By and All Right Reserved to AS10 TECH-RETAIL
              PRIVATE LIMITED
            </div>

            {/* Logo (Right) */}
            <div className="">
              <Image
                src="/images/lafetch.png"
                alt="LAFETCH Logo"
                width={120} // adjust size
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
