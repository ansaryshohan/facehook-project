import logoImage from "../../assets/images/logo.webp"
import avatarImage from "../../assets/images/avatars/avatar_1.jpg"
import homeIcon from "../../assets/icons/home.svg"
import notificationIcon from "../../assets/icons/notification.svg"
import { Link } from "react-router-dom";
import Logout from "../auth/Logout";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Header() {
  const {auth}=useAuthContext();
  return (
    // <!-- Navbar -->
    <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        {/* <!-- Logo --> */}
        <Link to="/">
          <img
            className="w-[50px] h-[50px] rounded-full "
            src={logoImage}
          />
        </Link>
        {/* <!-- nav links  --> */}

        <div className="flex items-center space-x-4">
          <Link to="/" className="btn-primary">
            <img src={homeIcon} alt="Home" />
            Home
          </Link>
          <button className="icon-btn">
            <Link to={"/"}>
            <img src={notificationIcon} alt="Notification" />
            </Link>
          </button>
          <Logout/>

          <button className=" !ml-8">
           <Link to={`/profile/${auth.user.id}`} className="flex-center  gap-3">
           <span className="text-lg font-medium lg:text-xl">User</span>
            <img
              className="h-[32px] w-[32px] lg:h-[44px] lg:w-[44px] rounded-full"
              src={avatarImage}
              alt=""
            />
           </Link>
          </button>
        </div>
        {/* <!-- nav links ends --> */}
      </div>
    </nav>
  );
}
