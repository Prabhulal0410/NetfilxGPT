import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errors, setErrors] = useState({});

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  const handleButtonClick = (e) => {
    e.preventDefault();

    const validationErrors = checkValidData(
      name.current?.value,
      email.current.value,
      password.current.value,
      isSignInForm
    );

    setErrors(validationErrors || {});
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background */}
      <img
        src="/loginpagebg.jpg"
        alt="Login background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <Header />

      {/* Auth Form */}
      <div className="absolute inset-0 flex justify-center items-center z-10 px-6">
        <div className="bg-black/75 p-8 sm:p-10 rounded-lg w-full max-w-sm text-white shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <form className="flex flex-col gap-4">
            {/* Name */}
            {!isSignInForm && (
              <div>
                <input
                  type="text"
                  ref={name}
                  placeholder="Full Name"
                  className={`p-3 bg-neutral-800 rounded w-full text-white outline-none border ${
                    errors.name ? "border-red-500" : "border-transparent"
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
                placeholder="Email Address"
                className={`p-3 bg-neutral-800 rounded w-full text-white outline-none border ${
                  errors.email ? "border-red-500" : "border-transparent"
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
                className={`p-3 bg-neutral-800 rounded w-full text-white outline-none border ${
                  errors.password ? "border-red-500" : "border-transparent"
                }`}
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleButtonClick}
              className="bg-red-600 hover:bg-red-700 rounded py-3 font-semibold mt-2 transition-all duration-200 text-sm sm:text-base shadow-lg"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>

          {/* Toggle Form */}
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
        </div>
      </div>
    </div>
  );
};

export default Login;


