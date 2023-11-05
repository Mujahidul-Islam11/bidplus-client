/* eslint-disable react/no-unescaped-entities */

import { NavLink } from "react-router-dom";


const Register = () => {
    return (
        <div className="max-h-screen">
            <div className="w-4/12 mx-auto bg-slate-200 rounded-lg">
            <h3 className="text-center text-2xl font-bold text-primary ">Create Account</h3>
            <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="email" name="name" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="email" name="photo" placeholder="PhotoURL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
        </div>
        <h3 className="text-center">Already have an account? please <NavLink className={'font-bold'} to={'/login'}><i>LogIn</i></NavLink></h3>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <h2 className="font-bold text-center text-xl ">Or</h2>
      <button className="btn w-full">Google</button>
        </div>
        </div>
           
    );
};

export default Register;