import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import swal from "sweetalert";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleLogOutUser = () => {
    logOut()
      .then()
      .catch()
      swal("Good job!", "Successfully Logged Out User", "success");
  }


  const Links = ( 
    <>
    <li className="text-xl font-bold">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-cyan-300" : ""
              }
            >
              <a href="">Home</a>
            </NavLink>
          </li>
          {
            user ? <li className="text-xl font-bold">
            <NavLink
              to="/addJobs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-cyan-300" : ""
              }
            >
              <a href="">Add Jobs</a>
            </NavLink>
          </li>: <li className="text-xl font-bold">
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-cyan-300" : ""
              }
            >
              <a href="">Register</a>
            </NavLink>
          </li>
          }
          {
            user ? <li className="text-xl font-bold">
            <NavLink
              to="/postedJobs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-cyan-300" : ""
              }
            >
              <a href="">My Posted Jobs</a>
            </NavLink>
          </li>:
          <li className="text-xl font-bold">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-cyan-300" : ""
            }
          >
            <a href="">LogIn</a>
          </NavLink>
        </li>
          }
          {user &&
            <li className="text-xl font-bold">
            <NavLink
              to="/myBids"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-cyan-300" : ""
              }
            >
              <a href="">My Bids</a>
            </NavLink>
          </li>
          }
          {
            user && <li className="text-xl font-bold">
            <NavLink
              to="/bidRequest"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-cyan-300" : ""
              }
            >
              <a href="">Bid Request</a>
            </NavLink>
          </li>
          }
    </>
  )
    return (
        <div className="navbar bg-base-100">
  <div className="navbar w-[1300px] mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {
        Links
      }
      </ul>
    </div>
    <NavLink to={'/'} className="flex"><img src="https://i.ibb.co/1J75wKN/Royal-Tech-2.png" alt="" className="w-20 " /><i className="text-gray-500 font-bold text-xl">SkillSwapHub</i></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        Links
      }
    </ul>
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
                <p className="font-semibold">
                  {user.displayName}
                </p>
              </div>
              <button
                onClick={handleLogOutUser}
                type="button"
                className="btn hidden md:inline-block focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
              >
                LogOut
              </button>
            </div>
          ) : (
            <NavLink to="/login">
              <button
                type="button"
                className="btn hidden md:inline-block focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
              >
                Login
              </button>
            </NavLink>
          )}
  </div>
  </div>
</div>
    );
};

export default Navbar;