import React, { useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    checkValidData(email,password)
  }

  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img
        src="/loginpagebg.jpg"
        alt="Login background"
        className="w-full h-full object-cover"
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Header */}
      <Header />

      {/* Auth Form */}
      <div className="absolute inset-0 flex justify-center items-center z-10 px-6">
        <div className="bg-black/75 p-8 sm:p-10 rounded-lg w-full max-w-sm text-white">
          {/* Heading changes */}
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <form className="flex flex-col gap-4">
            {/* Name field only in Sign Up */}
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 bg-neutral-800 rounded text-white outline-none text-sm sm:text-base"
              />
            )}

            <input
              type="email"
              placeholder="Email Address"
              className="p-3 bg-neutral-800 rounded text-white outline-none text-sm sm:text-base"
            />

            <input
              type="password"
              placeholder="Password"
              className="p-3 bg-neutral-800 rounded text-white outline-none text-sm sm:text-base"
            />

            {/* Button text changes */}
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 rounded py-3 font-semibold mt-2 transition-all duration-200 text-sm sm:text-base"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            {isSignInForm && (
              <div className="flex justify-between items-center text-xs sm:text-sm text-gray-400 mt-2">
                <label className="flex items-center gap-1">
                  <input type="checkbox" className="accent-red-600" />
                  Remember me
                </label>
                <p className="cursor-pointer hover:underline">Need help?</p>
              </div>
            )}
          </form>

          {/* Bottom toggle text */}
          <div className="mt-8 text-gray-400 text-sm text-center sm:text-left">
            {isSignInForm ? (
              <>
                New to Netflix?{" "}
                <span
                  onClick={toggleSignInForm}
                  className="text-white hover:underline cursor-pointer"
                >
                  Sign up now
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  onClick={toggleSignInForm}
                  className="text-white hover:underline cursor-pointer"
                >
                  Sign in
                </span>
              </>
            )}
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center sm:text-left leading-snug">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

