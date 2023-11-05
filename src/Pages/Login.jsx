/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";


const Login = () => {
    return (
        <div className="mt-10">
            <div className="w-4/12 mx-auto bg-slate-200  rounded-lg">
            <h3 className="text-center text-2xl font-bold text-primary ">Please LogIn</h3>
            <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered" required />
        </div>
        <h3 className="text-center">Don't have an account? please <NavLink className={'font-bold'} to={'/register'}><i>Register</i></NavLink></h3>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <h2 className="font-bold text-center text-xl ">Or</h2>
      <button className="btn w-full">Google</button>
        </div>
        </div>
    );
};

export default Login;