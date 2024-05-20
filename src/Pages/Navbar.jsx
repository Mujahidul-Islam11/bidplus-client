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
  console.log(user);

  const Links = (
    <>
      <li className="text-base font-400">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#6D54FE]" : ""
          }
        >
          <a href="">Home</a>
        </NavLink>
      </li>
        <li className="text-base font-400">
          <NavLink
            to="/addJobs"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-cyan-300" : ""
            }
          >
            <a href="">Post New Job</a>
          </NavLink>
        </li>
      <li className="text-base font-400">
          <NavLink
            to="/postedJobs"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-cyan-300" : ""
            }
          >
            <a href="">My Job Posts</a>
          </NavLink>
        </li>
        <li className="text-base font-400">
          <NavLink
            to="/myBids"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-cyan-300" : ""
            }
          >
            <a href="">My Bids</a>
          </NavLink>
        </li>
        <li className="text-base font-400">
          <NavLink
            to="/bidRequest"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-cyan-300" : ""
            }
          >
            <a href="">Bid Tracker</a>
          </NavLink>
      </li>
      
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar w-[1300px] mx-auto ">
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
              {user ? (
                <div className="flex lg:hidden flex-wrap items-center gap-4">
                  <div className=" flex-wrap items-center gap-2">
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
                    className="btn md:inline-block focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
                  >
                    LogOut
                  </button>
                </div>
              ) : (
                <NavLink to={"/login"}>
                  <a className="btn">LogIn</a>
                </NavLink>
              )}
            </ul>
          </div>
          {/* Logo */}
          <NavLink to={"/"} className="flex">
            <h3 className="text-xl font-900">BidPlus.</h3>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="lg:flex hidden flex-wrap items-center gap-4">
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
                className="btn border-[#6D54FE] bg-white text-[#6D54FE] hover:bg-[#6D54FE] hover:text-white"
              >
                LogOut
              </button>
            </div>
          ) : (
            <div className="flex gap-6 ">
              <NavLink to="/login">
              <button
                type="button"
                className="btn text-base capitalize border-[#6D54FE] bg-white text-[#6D54FE] hover:bg-[#6D54FE] hover:text-white"
              >
                Login
              </button>
            </NavLink>
              <NavLink to="/register">
              <button
                type="button"
                className="btn text-base capitalize bg-[#6D54FE] text-white hover:text-[#6D54FE] hover:border-[#6D54FE] hover:bg-white"
              >
                Sign Up
              </button>
            </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
