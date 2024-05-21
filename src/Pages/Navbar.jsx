import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOutUser = () => {
    logOut().then().catch();
    swal("Good job!", "Successfully Logged Out User", "success");
  };

  const Links = (
    <>
      <li className="text-base font-400">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#6D54FE]" : ""
          }
        >
          Home
        </NavLink>
      </li>
        <li className="text-base font-400">
          <NavLink
            to="/addJobs"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-[#6D54FE]" : ""
            }
          >
            Post New Job
          </NavLink>
        </li>
      <li className="text-base font-400">
          <NavLink
            to="/postedJobs"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-[#6D54FE]" : ""
            }
          >
           My Job Posts
          </NavLink>
        </li>
        <li className="text-base font-400">
          <NavLink
            to="/myBids"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-[#6D54FE]" : ""
            }
          >
            My Bids
          </NavLink>
        </li>
        <li className="text-base font-400">
          <NavLink
            to="/bidRequest"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-[#6D54FE]" : ""
            }
          >
         Bid Tracker
          </NavLink>
      </li>
      
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar md:w-[1300px] mx-auto items-center">
        <div className="navbar-start">
          {/* Dropdown section for small device */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links}
              
            </ul>
          </div>
          {/* Logo */}
          <NavLink to={"/"} className="flex">
            <h3 className="text-base md:text-xl font-900">BidPlus.</h3>
          </NavLink>
        </div>
        {/* Navbar list links */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        {/* Profile and login, sign up button */}
        <div className="navbar-end">
          {user ? (
            <div className="md:flex hidden flex-wrap items-center gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <img
                  className="w-[50px] rounded-full"
                  src={user.photoURL}
                  alt="User Profile"
                />
                <p className="font-semibold">{user.displayName}</p>
              </div>
              <button
                onClick={handleLogOutUser}
                type="button"
                className="btn lg:btn-md btn-sm border-[#6D54FE] bg-white text-[#6D54FE] hover:bg-[#6D54FE] hover:text-white"
              >
                LogOut
              </button>
            </div>
          ) : (
            <div className="flex gap-3 md:gap-6">
              <NavLink to="/login">
              <button
                type="button"
                className="btn text-sm md:text-base capitalize border-[#6D54FE] bg-white text-[#6D54FE] hover:bg-[#6D54FE] hover:text-white"
              >
                Log in
              </button>
            </NavLink>
              <NavLink to="/register">
              <button
                type="button"
                className="btn text-sm md:text-base capitalize bg-[#6D54FE] text-white hover:text-[#6D54FE] hover:border-[#6D54FE] hover:bg-white"
              >
                Sign Up
              </button>
            </NavLink>
            </div>
          )}
          <div>
              {user && <div className="flex md:hidden flex-wrap items-center gap-4 relative">
                  <div className=" flex-wrap flex items-center gap-2">
                    <img
                      className="w-[40px] md:w-[50px] rounded-full"
                      src={user.photoURL}
                      alt="User Profile"
                    />
                    <p className="font-semibold text-sm md:text-base hidden sm:flex">{user.displayName}</p>
                  </div>
                  <button
                    onClick={handleLogOutUser}
                    type="button"
                    className="btn btn-sm md:btn-md border-[#6D54FE] bg-white text-[#6D54FE] hover:bg-[#6D54FE] hover:text-white"
                  >
                    LogOut
                  </button>
                </div>}
              </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
