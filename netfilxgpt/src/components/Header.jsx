import {auth} from "../utils/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"; 
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //whenever user signin or signout this useeffect is called
  //onAuthStateChanged is firebase Api automatic gets user info obj when user signin or signup
  //if user signin we will dispatch adduser reducer to store user info into our appstore
  //if user sign out we will dispatch removeUser reducer to remove userinfo from appstore
  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/Browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    // unsubscribe when component unmount
    return () => unsubscribe()
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 sm:px-12 py-4 z-10">
      {/* Netflix Logo */}
      <img
        src= {LOGO}
        alt="Netflix Logo"
        className="w-24 sm:w-36 lg:w-44 object-contain"
      />

      <div className="flex items-center gap-4">
        {/* User Icon */}
        <img
          src="/userlogo.png"
          alt="User"
          className="w-8 sm:w-10 h-auto rounded"
        />

        {/* Signout Button */}
        <button className="text-white text-sm sm:text-base bg-red-600 hover:bg-red-700 px-3 sm:px-4 py-1.5 rounded" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default Header;



