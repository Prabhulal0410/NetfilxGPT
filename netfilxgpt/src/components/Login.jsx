import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errors, setErrors] = useState({});

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  const handleButtonClick = (e) => {
    e.preventDefault();

    const validationErrors =
      checkValidData(
        name.current?.value,
        email.current.value,
        password.current.value,
        isSignInForm
      ) || {}; 

    setErrors(validationErrors);
    console.log("Validation errors:", validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log("✅ Signed up user:", userCredential.user);
        })
        .catch((error) => {
          console.error("❌ Signup error:", error);
          setErrors({ firebase: error.message });
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log("✅ Signed in user:", userCredential.user);
        })
        .catch((error) => {
          console.error("❌ Signin error:", error);
          setErrors({ firebase: error.message });
        });
    }
  };

  return (
    <div className="relative w-full h-screen text-white font-sans">
      {/* Background */}
      <img
        src="/loginpagebg.jpg"
        alt="Login background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <Header />

      {/* Auth Form */}
      <div className="absolute inset-0 flex justify-center items-center z-10 px-4 sm:px-6">
        <div className="bg-black/70 backdrop-blur-md p-8 sm:p-10 md:p-12 rounded-lg w-full max-w-sm sm:max-w-md shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <form className="flex flex-col gap-4 sm:gap-5">
            {/* Name (only in SignUp) */}
            {!isSignInForm && (
              <div>
                <input
                  type="text"
                  ref={name}
                  placeholder="Full Name"
                  className={`w-full px-4 py-3 sm:py-3.5 bg-transparent border rounded-md text-white placeholder-gray-400 text-base focus:outline-none transition-all duration-200 ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-600 focus:border-white"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>
            )}

            {/* Email */}
            <div>
              <input
                type="email"
                ref={email}
                placeholder="Email address"
                className={`w-full px-4 py-3 sm:py-3.5 bg-transparent border rounded-md text-white placeholder-gray-400 text-base focus:outline-none transition-all duration-200 ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-600 focus:border-white"
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                ref={password}
                placeholder="Password"
                className={`w-full px-4 py-3 sm:py-3.5 bg-transparent border rounded-md text-white placeholder-gray-400 text-base focus:outline-none transition-all duration-200 ${
                  errors.password
                    ? "border-red-500"
                    : "border-gray-600 focus:border-white"
                }`}
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* 🔥 Firebase error message */}
            {errors.firebase && (
              <p className="text-red-500 text-sm mt-3 text-center">
                {errors.firebase}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleButtonClick}
              className="w-full bg-red-600 hover:bg-red-700 rounded-md py-3 sm:py-1.5 font-semibold mt-2 transition-all duration-300 text-base sm:text-lg shadow-lg"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>

          {/* Remember Me + Help (Netflix Style) */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-red-500" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>

          {/* Toggle */}
          <div className="mt-8 text-gray-400 text-sm text-center">
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

          {/* ReCAPTCHA Text */}
          <p className="text-xs text-gray-500 mt-6 text-center leading-relaxed">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <span className="text-blue-400 hover:underline cursor-pointer">
              Learn more.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
