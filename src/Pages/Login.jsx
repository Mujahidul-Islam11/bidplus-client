/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signIn, GoogleSignIn } = useContext(AuthContext);
  const goHome = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        goHome("/");
        swal("Good job!", "Successfully logged in", "success");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    GoogleSignIn()
      .then((result) => {
        console.log(result.user);
        goHome("/");
        swal("Good job!", "Successfully Logged In With Google", "success");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>Login-Page</title>
      </Helmet>
      <div className="mx-4 md:w-4/12 bg-white rounded-lg shadow-lg p-8 border">
        <h3 className="text-center text-3xl font-bold text-primary mb-6">
          Welcome Back!
        </h3>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <NavLink to="/register" className="font-bold text-primary">
              Don't have an account? Register
            </NavLink>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="flex btn capitalize bg-[#6D54FE] text-white hover:bg-[#6e54fed6] w-full"
        >
          <img
            src="https://i.ibb.co/QpyZXNR/7123025-logo-google-g-icon.png"
            className="w-10 h-10"
            alt=""
          />
          <h3 className="font-bold text-xl flex md:hidden">Google</h3>
          <h3 className="font-bold text-xl hidden md:flex">Continue with Google</h3>
        </button>
      </div>
    </div>
  );
};

export default Login;
