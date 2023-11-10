/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import swal from "sweetalert";
import { Helmet } from "react-helmet";


const Login = () => {
  const { signIn, GoogleSignIn } = useContext(AuthContext)
  const goHome = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password);
    signIn(email, password)
        .then(result => {
            console.log(result.user);
            goHome('/')
            swal("Good job!", "Successfully logged in", "success");
        })
        .catch(error => {
            console.error(error)
        })

}

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
        <div className="mt-10">
          <Helmet>
          <title>Login-Page</title>
        </Helmet>
            <div className="w-4/12 mx-auto bg-white  rounded-lg">
            <h3 className="text-center text-2xl font-bold text-primary ">Please LogIn</h3>
            <form onSubmit={handleLogin} className="card-body">
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
        <h3 className="text-center">Don't have an account? please <NavLink className={'font-bold'} to={'/register'}><i>Register</i></NavLink></h3>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <h2 className="font-bold text-center text-xl ">Or</h2>
      <button
          onClick={handleGoogleLogin}
          className="flex btn btn-secondary w-full"
        >
          <img
            src="https://i.ibb.co/QpyZXNR/7123025-logo-google-g-icon.png"
            className="w-14 h-14  rounded-lg"
            alt=""
          />
          <h3 className="font-bold text-xl">Google</h3>
        </button>
        </div>
        </div>
    );
};

export default Login;