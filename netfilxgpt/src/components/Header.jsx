import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { toast } from "react-hot-toast";   // ✅ ADDED

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Get current user from Redux store
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signed out successfully ✨");  // ✅ PREMIUM TOAST
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to sign out. Try again!"); // ❌ error toast
      });
  };

  //whenever user signin or signout this useeffect is called
  //onAuthStateChanged is firebase Api automatic gets user info obj when user signin or signup
  //if user signin we will dispatch adduser reducer to store user info into our appstore
  //if user sign out we will dispatch removeUser reducer to remove userinfo from our appstore
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50  from-black/80 to-transparent">
      <div className="flex items-center justify-between px-6 sm:px-12 py-4">

        {/* Netflix Logo */}
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
              <button className="hover:text-gray-300">Browse by Languages</button>
            </nav>
          )}
        </div>

        {user && (
          <div className="flex items-center gap-6 text-white">

            {/* Search Icon */}
            <span className="hidden sm:block text-xl cursor-pointer">🔍</span>

            {/* Notifications Icon */}
            <span className="hidden sm:block text-xl cursor-pointer">🔔</span>

            {/* User Icon */}
            <img
              src="/userlogo.png"
              alt="User"
              className="w-8 sm:w-10 h-auto rounded cursor-pointer"
            />

            {/* Signout Button */}
            <button
              className="text-white text-xs sm:text-sm bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded"
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




