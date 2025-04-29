import { Link } from "react-router-dom";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import apiRequest from "../../utils/apiRequest";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
const Navbar = () => {
  const { navigate, setIsAuth, isAuth } = useContext(AppContext);

  const logoutUser = async () => {
    try {
      const res = await apiRequest.post("/auth/logout");
      if (res.data.success) {
        localStorage.removeItem("user");
        setIsAuth(""); // set a proper boolean
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const isCourseListPage = location.pathname.includes("/course-list");

  return (
    <header
      className={`${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      } flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4`}
    >
      <div
        onClick={() => navigate("/")}
        className=" flex justify-center items-center  gap-1 w-28 text-2xl font-bold  lg:w-32 cursor-pointer"
      >
        <span className="hidden md:block">
          <HiOutlineAcademicCap color="blue" size={30} />
        </span>{" "}
        <span className=""> Neldemy </span>
      </div>
      {/*  */}
      {/* <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      /> */}
      {/* Desktop view */}
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {/* {user && (
            <>
              <button onClick={() => navigate("/educator")} className="">
                {isEducator ? "Educator Dashboard" : "Become Educator"}
              </button>{" "}
              |<Link to={"/my-enrollment"}>My Enrollments</Link>{" "}
            </>
          )} */}
        </div>
        {isAuth !== "" ? (
          <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
            {isAuth !== "" && (
              <>
                {/* <button onClick={() => navigate("/educator")} className="">
                  {isEducator ? "Educator Dashboard" : "Become Educator"}
                </button> */}
                <Link to={"/my-enrollment"}>My Enrollments</Link>
              </>
            )}
            <span className="cursor-pointer  group">
              <RiArrowDropDownLine size={30} />
              <span
                onClick={logoutUser}
                className="hidden group-hover:block text-red-500"
              >
                Logout
              </span>
            </span>
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full">
              Create Account
            </button>
          </Link>
        )}
      </div>
      {/* Mobile view */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500 ">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {isAuth !== "" ? (
            <>
              {/* <button onClick={() => navigate("/educator")} className="">
                {isEducator ? " Dashboard" : "Educator"}
              </button> */}
              <Link to={"/my-enrollment"}>
                <img src={assets.user_icon} width={30} height={40} />
              </Link>
              {isAuth !== "" && (
                <span className="cursor-pointer group">
                  <RiArrowDropDownLine size={30} />
                  <span
                    onClick={logoutUser}
                    className="hidden group-hover:block text-red-500"
                  >
                    Logout
                  </span>
                </span>
              )}
            </>
          ) : (
            <span className="cursor-pointer group">
              <RiArrowDropDownLine size={30} />
              <Link
                to={"/login"}
                className="hidden group-hover:block text-blue-500"
              >
                Login
              </Link>
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
