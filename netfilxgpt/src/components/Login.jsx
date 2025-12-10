import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

import toast from "react-hot-toast";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: name.current?.value,
            photoURL: "https://example.com/user.png",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));

              toast.success("Account created successfully!");
              setLoading(false);
            })
            .catch(() => {
              toast.error("Profile update failed!");
              setLoading(false);
            });
        })
        .catch((error) => {
          setLoading(false);
          if (error.code === "auth/email-already-in-use") {
            toast.error("Email already registered! Please sign in.");
          } else {
            toast.error("Signup failed. Try again.");
          }
        });

      return;
    }

    // SIGN IN
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then(() => {
        toast.success("Logged in successfully!");
        setLoading(false);
      })
      .catch(() => {
        toast.error("Invalid email or password");
        setLoading(false);
      });
  };

  return (
    <div className="relative w-full h-screen text-white font-sans overflow-hidden">
      <img
        src="/loginpagebg.jpg"
        alt="Login background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20"></div>

      <Header />

      {/* MAIN CONTAINER */}
      <div className="absolute inset-0 flex justify-center items-center z-10 px-4 sm:px-6">
        
        {/* RESPONSIVE CARD */}
        <div
          className="
            bg-black/70 backdrop-blur-md 
            p-6 sm:p-8 md:p-10 
            rounded-lg 
            w-full 
            max-w-[90%] sm:max-w-sm md:max-w-md 
            shadow-2xl 
            mx-auto
          "
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <form className="flex flex-col gap-4">
            {!isSignInForm && (
              <div>
                <input
                  type="text"
                  ref={name}
                  placeholder="Full Name"
                  className={`w-full px-4 py-3 bg-transparent border rounded-md text-white placeholder-gray-400 text-base ${
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

            <div>
              <input
                type="email"
                ref={email}
                placeholder="Email address"
                className={`w-full px-4 py-3 bg-transparent border rounded-md text-white placeholder-gray-400 text-base ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-600 focus:border-white"
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                ref={password}
                placeholder="Password"
                className={`w-full px-4 py-3 bg-transparent border rounded-md text-white placeholder-gray-400 text-base ${
                  errors.password
                    ? "border-red-500"
                    : "border-gray-600 focus:border-white"
                }`}
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              onClick={handleButtonClick}
              className={`w-full rounded-md py-3 font-semibold mt-2 transition-all duration-300 text-lg shadow-lg ${
                loading
                  ? "bg-red-800 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {loading
                ? isSignInForm
                  ? "Signing in..."
                  : "Creating account..."
                : isSignInForm
                ? "Sign In"
                : "Sign Up"}
            </button>
          </form>

          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-red-500" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>

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

          <p className="text-xs text-gray-500 mt-6 text-center">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
