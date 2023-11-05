import { NavLink } from "react-router-dom";


const Navbar = () => {
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
          <li className="text-xl font-bold">
            <NavLink
              to="/addJobs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-cyan-300" : ""
              }
            >
              <a href="">Add Jobs</a>
            </NavLink>
          </li>
          <li className="text-xl font-bold">
            <NavLink
              to="/postedJobs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-cyan-300" : ""
              }
            >
              <a href="">My Posted Jobs</a>
            </NavLink>
          </li>
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
          <li className="text-xl font-bold">
            <NavLink
              to="/bidRequest"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-cyan-300" : ""
              }
            >
              <a href="">Bid Request</a>
            </NavLink>
          </li>
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
    <NavLink to={'/login'} className="btn hover:bg-cyan-300">LogIn</NavLink>
  </div>
  </div>
</div>
    );
};

export default Navbar;