"use client";
import React, { useState } from "react";
import { X, Phone, Shield } from "lucide-react";
import Image from "next/image";
import { endPoints } from "@/utils/endpoints";
import axiosHttp from "@/utils/axioshttp";
import { Toaster, toast } from "react-hot-toast";

const PhoneAuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  // Updated state for step 3 form data
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    gender: "",
  });

  const authendPoint = `${endPoints.auth}`;
  const verifyOtpendPoint = `${endPoints.verifyOtp}`;
  const resendOtpendPoint = `${endPoints.resendOtp}`;
  const signUpUser = `${endPoints.updateUser}`; //put

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

      if (response.status === 200) {
        setCurrentStep("otp");
        const successMessage = response?.data?.message;

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
        toast.success("OTP verified successfully!");
        localStorage.setItem("userPhone", phoneNumber); // store for next step
        setCurrentStep("details");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Invalid OTP";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Updated function to handle step 3 form submission with API call
  const handleDetailsSubmit = async () => {
    if (!userDetails.name || !userDetails.email || !userDetails.gender) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      // Get phone number from localStorage
      const storedPhone = localStorage.getItem("userPhone");

      const formData = {
        fullName: userDetails.name,
        email: userDetails.email,
        gender: userDetails.gender,
        type: "signup",
        phone: storedPhone || `+91${phoneNumber}`, // fallback to current phoneNumber if not in localStorage
      };

      const res = await axiosHttp.put(signUpUser, formData);

      if (res.status === 200) {
        console.log("Signup successful:", res.data);
        setCurrentStep("welcome");
      } else {
        alert(`Signup failed: ${res.data?.message || "Please try again"}`);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Network error. Please check your connection and try again.");
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
    setUserDetails({ name: "", email: "", gender: "" });
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
          <div className="bg-white shadow-xl max-w-4xl w-full max-h-[600px] flex overflow-hidden">
            {/* Left Side - Image */}
            <div className="w-1/2 bg-black flex items-center justify-center relative">
              {/* LaFetch Logo - Only show on steps 1-3 */}
              {currentStep !== "welcome" && (
                <div className="absolute top-0 left-8 pt-[10px]">
                  <Image
                    src="/images/logo-white.png"
                    alt="LaFetch Logo"
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                </div>
              )}

              {/* Conditional content based on step */}
              {currentStep === "welcome" ? (
                // Step 4 - Welcome screen content
                <div className="flex flex-col items-center justify-center text-center text-white">
                  <Image
                    src="/images/iphone-login.png"
                    alt="Phone"
                    width={350}
                    height={0}
                    className="object-contain "
                  />
                </div>
              ) : (
                // Steps 1, 2, 3 - Mobile screenshots
                <div className="flex gap-6 mt-[50px]">
                  <Image
                    src="/images/iphone-login.png"
                    alt="App preview"
                    width={350}
                    height={0}
                    className="rounded-3xl shadow-lg"
                  />
                </div>
              )}
            </div>

            {/* Right Side - Form */}
            <div
              className={`w-1/2 p-8 flex flex-col justify-center relative ${
                currentStep === "welcome" ? "bg-black" : "bg-white"
              }`}
            >
              {/* Close Button inside right side */}
              <button
                onClick={closeModal}
                className={`absolute top-4 right-4 hover:opacity-60 cursor-pointer ${
                  currentStep === "welcome" ? "text-white" : "text-black"
                }`}
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
             placeholder-gray-400 text-black"
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

                    <p className="text-sm text-black text-center">
                      By continuing, you agree to Lafetch's{" "}
                      <span className="underline font-[700]">
                        Terms & Conditions
                      </span>{" "}
                      and{" "}
                      <span className="underline font-[700]">
                        Privacy Policy
                      </span>
                    </p>
                  </div>
                </>
              ) : currentStep === "otp" ? (
                // OTP Verification Step
                <>
                  <div className="text-center mb-8">
                    {/* Back button moved to step 2 */}
                    <button
                      onClick={() => setCurrentStep("phone")}
                      className="absolute top-4 left-4 text-black hover:text-gray-600"
                    >
                      ←
                    </button>
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
              ) : currentStep === "details" ? (
                // Step 3 - User Details Form (Back button removed)
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-black mb-2">
                      ONE LAST STEP!
                    </h2>
                    <p className="text-black">
                      Let's get to know you a bit more.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={userDetails.name}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            name: e.target.value,
                          })
                        }
                        placeholder="Write your name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                 placeholder-gray-400 text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={userDetails.email}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            email: e.target.value,
                          })
                        }
                        placeholder="Write your email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                 placeholder-gray-400 text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Gender
                      </label>
                      <select
                        value={userDetails.gender}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            gender: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                 text-black"
                      >
                        <option value="">Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <button
                      onClick={handleDetailsSubmit}
                      disabled={loading}
                      className="w-full bg-black text-white py-3 rounded-md font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {loading ? "Creating Account..." : "Continue"}
                    </button>
                  </div>
                </>
              ) : (
                // Step 4 - Welcome Screen with Black Background
                <>
                  <div className="text-center text-white h-full flex flex-col justify-between">
                    <div className="flex-1 flex flex-col justify-center">
                      <h2 className="text-2xl font-bold mb-4">
                        Welcome to LaFetch!
                      </h2>
                      <p className="mb-8">
                        You're all set! Start exploring amazing fashion deals.
                      </p>
                      <button
                        onClick={closeModal}
                        className="w-full bg-white text-black py-3 rounded-md font-medium cursor-pointer transition-colors hover:bg-gray-100"
                      >
                        Get Started
                      </button>
                    </div>

                    {/* Logo at bottom for welcome screen */}
                    <div className="mt-8 flex justify-center">
                      <Image
                        src="/images/logo-purple.png"
                        alt="LaFetch Logo"
                        width={120}
                        height={40}
                        className="object-contain"
                      />
                    </div>
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
