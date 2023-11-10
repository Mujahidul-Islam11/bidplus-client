/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser, GoogleSignIn, upProfile,logOut } = useContext(AuthContext);
  const goHome = useNavigate();

  const handleRegisterPage = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(email, password, name, photo);
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
        password
      )
    ) {
      swal(
        "Error!",
        "Minimum six characters, at least one capital letter and one number and a special character",
        "error"
      );
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        upProfile(name, photo)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })

        goHome("/login");
        swal("Good job!", "Successfully Created User", "success");
        logOut()
        .then()
        .then(error=>{
          console.error(error)
        })

      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleRegister = () => {
    GoogleSignIn()
      .then((result) => {
        console.log(result.user);
        goHome("/");
        swal("Good job!", "Successfully Created Account", "success");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="max-h-screen">
      <Helmet>
          <title>Register-Page</title>
        </Helmet>
      <div className="w-4/12 mx-auto bg-slate-200 rounded-lg">
        <h3 className="text-center text-2xl font-bold text-primary ">
          Create Account
        </h3>
        <form onSubmit={handleRegisterPage} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="PhotoURL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>
          <h3 className="text-center">
            Already have an account? please{" "}
            <NavLink className={"font-bold"} to={"/login"}>
              <i>LogIn</i>
            </NavLink>
          </h3>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <h2 className="font-bold text-center text-xl ">Or</h2>
        <button
          onClick={handleGoogleRegister}
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

export default Register;
