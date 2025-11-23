import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toast } from "react-hot-toast";
import { toggleGptSearchView } from "../utils/searchSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // Track scrolling
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // if user scrolls more than 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => toast.success("Signed out successfully ✨"))
      .catch(() => toast.error("Failed to sign out."));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    //toggle gptsearch on click
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 
      ${
        isScrolled
          ? "bg-black"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }
      `}
    >
      <div className="flex items-center justify-between px-6 sm:px-16 py-2">
        {/* Logo + Nav */}
        <div className="flex items-center gap-10">
          <img
            src={LOGO}
            alt="Netflix Logo"
            className="w-24 sm:w-32 lg:w-40 object-contain cursor-pointer"
            onClick={() => navigate("/Browse")}
          />

          {/* Navigation Menu */}
          {user && (
            <nav className="hidden sm:flex gap-4 lg:gap-6 text-white font-medium text-sm">
              <button className="hover:text-gray-300">Home</button>
              <button className="hover:text-gray-300">Shows</button>
              <button className="hover:text-gray-300">Movies</button>
              <button className="hover:text-gray-300">New & Popular</button>
              <button className="hover:text-gray-300">My List</button>
            </nav>
          )}
        </div>

        {/* Right Side */}
        {user && (
          <div className="flex items-center gap-6 text-white">
            {showGptSearch && (
              <select
                className="bg-black/70 text-white border border-white/20 px-3 py-1.5 rounded-md backdrop-blur-sm hover:border-white/40 transition"
                onChange={handleLangChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option
                    key={lang.identifier}
                    value={lang.identifier}
                    className="bg-black text-white"
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            {/* ⭐ Modern Netflix-style GPT Button */}
            <button
              className="px-4 py-1.5 rounded-md font-medium
                 bg-white/10 text-white border border-white/20
                 hover:bg-white/20 hover:border-white/40
                 backdrop-blur-md transition-all duration-200 cursor-pointer"
              onClick={handleGptSearch}
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </button>

            {/* ⭐ Netflix-style Avatar */}
            <img
              src="/userlogo.png"
              alt="User"
              className="w-8 h-8 rounded-md object-cover
                border border-white/20 hover:border-white/40
                transition cursor-pointer"
            />

            {/* ⭐ Red-ish Gradient Netflix Signout Button */}
            <button
              className="px-3 py-1.5 rounded-md text-sm font-semibold
                 bg-gradient-to-r from-red-600 via-red-700 to-red-800
                 hover:from-red-700 hover:via-red-800 hover:to-red-900
                 shadow-md shadow-red-900/30
                 transition-all duration-200 cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
