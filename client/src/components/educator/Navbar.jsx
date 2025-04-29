import { assets } from "../../assets/assets"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
const Navbar = () => {
  // const educatorData = dummyEducatorData;
  const {  isAuth } = useContext(AppContext);

  return (
    <div className="flex ic justify-between px-4 md:px-8 border-b border-gray-500 py-3">
      <Link to={"/"}>
        <span className="w-28 lg:w-32 text-blue-700 font-bold">Neldemy</span>
      </Link>
      <div className="flex items-center gap-5 text-gray-500 relative">
        {isAuth !== "" && (
          <img src={assets.profile_img} alt="user_image" className="max-w-8" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
