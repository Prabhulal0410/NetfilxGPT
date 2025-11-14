import { useNavigate } from "react-router-dom";
import {auth} from "../utils/firebase"
import { signOut } from "firebase/auth"; 

const Header = () => {

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



