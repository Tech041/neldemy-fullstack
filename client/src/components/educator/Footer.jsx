import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <img src={assets.logo} alt="Logo" className="hidden md:block w-20" />
        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-gray-500">
        Copyright {new Date().getFullYear()}
        &copy; Neldemy. All Right Reserved{" "}
      </p>
      {/* Right side */}
      <div className="flex items-center gap-3 max-md:mt-4">
        <a href="#" className="">
          <img src={assets.facebook_icon} alt="Facebook_icon" className="" />
        </a>
        <a href="#" className="">
          <img src={assets.twitter_icon} alt="Twitter_icon" className="" />
        </a>
        <a href="#" className="">
          <img src={assets.instagram_icon} alt="Instagram_icon" className="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
