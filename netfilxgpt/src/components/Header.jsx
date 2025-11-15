import { useNavigate } from "react-router-dom";
import {auth} from "../utils/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"; 
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
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
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 sm:px-12 py-4 z-10">
      {/* Netflix Logo */}
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"  
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



