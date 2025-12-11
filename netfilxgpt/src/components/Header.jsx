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

  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => toast.success("Signed out successfully ✨"))
      .catch(() => toast.error("Failed to sign out."));
    setShowMenu(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        if (window.location.pathname === "/") {
          navigate("/Browse");
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => dispatch(toggleGptSearchView());
  const handleLangChange = (e) => dispatch(changeLanguage(e.target.value));

  return (
    // ⭐ SEO: semantic <header> + ARIA banner role
    <header
      role="banner"
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
        ${isScrolled ? "bg-black" : "bg-transparent"}
      `}
    >
      <div className="flex items-center justify-between px-4 sm:px-16 py-2 sm:py-2">
        
        {/* LOGO + NAVIGATION GROUP */}
        {/* ⭐ SEO: wrapping inside nav with aria-label */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className="flex items-center gap-6 sm:gap-10"
        >
          <img
            src={LOGO}
            alt="NetflixGPT Logo"   // ⭐ Improved alt text for SEO
            className="w-24 sm:w-32 lg:w-44 object-contain cursor-pointer"
            onClick={() => navigate("/Browse")}
          />

          {/* Desktop Navigation */}
          {user && (
            <ul
              role="menubar" // ⭐ Semantic menu role
              className="hidden lg:flex gap-4 lg:gap-6 text-white font-medium text-sm"
            >
              <li role="menuitem">
                <button className="hover:text-gray-300">Now Playing</button>
              </li>
              <li role="menuitem">
                <button className="hover:text-gray-300">Popular</button>
              </li>
              <li role="menuitem">
                <button className="hover:text-gray-300">Top Rated</button>
              </li>
              <li role="menuitem">
                <button className="hover:text-gray-300">Upcoming</button>
              </li>
            </ul>
          )}
        </nav>

        {/* RIGHT SECTION */}
        {user && (
          <div
            className="flex items-center gap-3 sm:gap-6 text-white relative"
            role="group"
            aria-label="User Actions"  // ⭐ Adds semantic label
          >
            {/* LANG SELECT (shows only in GPT mode) */}
            {showGptSearch && (
              <select
                aria-label="Select Language"  // ⭐ SEO accessibility tag
                className="block bg-black/70 text-white border border-white/20 px-3 py-1.5 
                           rounded-md backdrop-blur-sm hover:border-white/40 transition text-sm"
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

            {/* GPT Search Button */}
            <button
              aria-label="Toggle GPT Search"  // ⭐ screen readers + SEO
              className="px-3 sm:px-4 py-1.5 rounded-md font-medium
                bg-white/10 text-white border border-white/20
                hover:bg-white/20 hover:border-white/40
                backdrop-blur-md transition-all duration-200 cursor-pointer text-sm sm:text-base"
              onClick={handleGptSearch}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>

            {/* USER AVATAR */}
            <img
              src="/userlogo.png"
              alt="User Profile Avatar"   // ⭐ better SEO alt
              className="w-8 h-8 rounded-md object-cover
                border border-white/20 hover:border-white/40
                transition cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />

            {/* Mobile Dropdown */}
            {showMenu && (
              <div
                role="menu"    // ⭐ semantic menu
                className="absolute right-0 top-10 w-24 bg-black/95 border border-white/20 rounded-md shadow-lg py-2 sm:hidden animate-fadeIn z-50"
              >
                <button
                  role="menuitem"   // ⭐ accessibility role
                  onClick={handleSignOut}
                  className="w-full text-center px-1 py-1 text-sm text-red-500 font-bold hover:bg-red-600/20 transition"
                >
                  Sign Out
                </button>
              </div>
            )}

            {/* Desktop Sign Out */}
            <button
              aria-label="Sign Out"   // ⭐ explicit ARIA
              className="hidden sm:block px-3 py-1.5 rounded-md text-sm font-semibold
                bg-linear-to-r from-red-600 via-red-700 to-red-800
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
