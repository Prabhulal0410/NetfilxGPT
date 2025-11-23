import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toast } from "react-hot-toast";
import { toggleGptSearchView } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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
    dispatch(toggleGptSearchView())
  }

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
      <div className="flex items-center justify-between px-6 sm:px-12 py-2">
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

          <select className="bg-black">
            {SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifier} value="lang.identifier">{lang.name}</option>)}
          </select>

            <button className="bg-gray-300 px-4 py-1 rounded-md cursor-pointer text-black" onClick={handleGptSearch}>GptSearch</button>

            <img
              src="/userlogo.png"
              alt="User"
              className="w-7 sm:w-9 rounded cursor-pointer"
            />

            <button
              className="bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded text-xs sm:text-sm"
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
