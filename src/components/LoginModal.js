"use client";
import React, { useState } from "react";
import { X, Phone, Shield } from "lucide-react";
import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { Toaster, toast } from "react-hot-toast"; // Update this import
import Image from "next/image";

const PhoneAuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const authendPoint = `${endPoints.auth}`;
  const verifyOtpendPoint = `${endPoints.verifyOtp}`;
  const resendOtpendPoint = `${endPoints.resendOtp}`;

  const handlePhoneSubmit = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    setLoading(true);
    try {
      const response = await axiosHttp.post(authendPoint, {
        phone: phoneNumber,
      });
      console.log(response, "relekm");
      if (response.status === 200) {
        setCurrentStep("otp");
        const successMessage = response?.data?.message;
        console.log(successMessage, "jksjdk");
        toast.success(successMessage || "OTP sent successfully");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return; // ⬅️ Only allow digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpSubmit = async () => {
    const otpString = otp.join("");
    if (otpString.length !== 4) {
      toast.error("Please enter complete OTP");
      return;
    }

    setLoading(true);
    try {
      const response = await axiosHttp.post(verifyOtpendPoint, {
        phone: phoneNumber,
        otp: otpString,
      });

      if (response.status === 200) {
        toast.success("Successfully logged in!");
        setIsOpen(false);
        setCurrentStep("phone");
        setPhoneNumber("");
        setOtp(["", "", "", ""]);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Invalid OTP";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    setLoading(true);
    try {
      const res = await axiosHttp.post(resendOtpendPoint, {
        phone: phoneNumber,
      });
      toast.success(res?.data?.message || "OTP resent successfully");
    } catch (error) {
      toast.error("Failed to resend OTP");
    } finally {
      setLoading(false);
    }
  };
  const closeModal = () => {
    setIsOpen(false);
    setCurrentStep("phone");
    setPhoneNumber("");
    setOtp(["", "", "", ""]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Add Toaster component */}
      <Toaster position="top-center" />

      {/* Demo Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
      >
        Open Authentication Modal
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-80">
          <div className="bg-white  shadow-xl max-w-4xl w-full max-h-[600px] flex overflow-hidden">
            {/* Left Side - Image */}
            <div className="w-1/2 bg-black flex items-center justify-center relative">
              {/* LaFetch Logo */}
              <div className="absolute top-8 left-8">
                <Image
                  src="/images/logo-white.png" // ⬅️ put your logo file in /public
                  alt="LaFetch Logo"
                  width={120} // adjust size
                  height={40}
                  className="object-contain"
                />
              </div>
              {/* Replace Mock Mobile Screenshots with Next.js Image */}
              <div className="flex gap-6 mt-[70px]">
                <Image
                  src="/images/iphone-login.png"
                  alt="App preview"
                  width={350}
                  height={0}
                  className="rounded-3xl shadow-lg"
                />
              </div>
            </div>
            {/* Right Side - Form */}
            <div className="w-1/2 p-8 flex flex-col justify-center relative">
              {/* Close Button inside right side */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-black hover:text-gray-600"
              >
                <X size={24} />
              </button>
              {currentStep === "phone" ? (
                // Phone Number Step
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-black mb-2">
                      Continue with Mobile Number
                    </h2>
                    <p className="text-black">
                      Be part of the Exciting Discounts — Join us today!
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Phone Number
                      </label>
                      <div className="flex">
                        <div className="flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 rounded-l-md">
                          <span className="text-orange-500 mr-2">🇮🇳</span>
                          <span className="text-black">+91</span>
                        </div>
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="1234567890"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md 
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
             placeholder-gray-400 text-black" // ⬅️ added here
                          maxLength="10"
                        />
                      </div>
                    </div>

                    <button
                      onClick={handlePhoneSubmit}
                      disabled={loading}
                      className="w-full bg-black text-white py-3 rounded-md font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {loading ? "Sending..." : "Continue"}
                    </button>

                    {/* <div className="text-center">
                      <span className="text-black">Or</span>
                    </div>

                    <button className="w-full border border-gray-300 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                      <div className="w-5 h-5 mr-2">
                        <svg viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                      </div>
                      <span className="text-black">Sign in with Google</span>
                    </button> */}

                    <p className="text-xs text-black text-center">
                      By continuing, you agree to Lafetch's{" "}
                      <span className="underline">Terms & Conditions</span> and{" "}
                      <span className="underline">Privacy Policy</span>
                    </p>
                  </div>
                </>
              ) : (
                // OTP Verification Step
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-black mb-2">
                      Verify your Mobile Number
                    </h2>
                    <p className="text-black mb-4">
                      Be part of the Exciting Discounts — Join us today!
                    </p>
                    <p className="text-black">We sent a 4-digit code to</p>
                    <p className="font-medium text-black">+91 {phoneNumber}</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-center space-x-4">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          id={`otp-${index}`}
                          type="text"
                          value={digit}
                          onChange={(e) =>
                            handleOtpChange(index, e.target.value)
                          }
                          onKeyDown={(e) => {
                            if (
                              e.key === "Backspace" &&
                              !otp[index] &&
                              index > 0
                            ) {
                              const prevInput = document.getElementById(
                                `otp-${index - 1}`
                              );
                              if (prevInput) prevInput.focus();
                            }
                          }}
                          className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                          maxLength="1"
                        />
                      ))}
                    </div>

                    <div className="text-center">
                      <p className="text-black">
                        Haven't received your code?{" "}
                        <button
                          onClick={resendOtp}
                          disabled={loading}
                          className="text-black underline font-medium hover:text-black cursor-pointer disabled:opacity-50"
                        >
                          Resend Now
                        </button>
                      </p>
                    </div>

                    <button
                      onClick={handleOtpSubmit}
                      disabled={loading}
                      className="w-full bg-black text-white py-3 rounded-md font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {loading ? "Verifying..." : "Continue"}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneAuthModal;
