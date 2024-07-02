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
        "Mini. 6 characters (one capital letter, number, and a special character)",
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
        swal("Great!", "Successfully Created Account", "success");
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
        swal("Great!", "Successfully Created Account", "success");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex justify-center items-center md:h-screen my-10">
      <Helmet>
          <title>Register-Page</title>
        </Helmet>
      <div className="mx-4 md:w-4/12 bg-white rounded-lg shadow-lg p-2 border">
        <h3 className="text-center text-2xl md:text-3xl font-bold my-3">
          Create Your Account
        </h3>
        <form onSubmit={handleRegisterPage} className="card-body -mt-5">
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
          <div className="flex gap-4 justify-between items-center">
            <NavLink to="/login" className="font-bold">
              Already have an account? <span className="text-primary">Login</span>
            </NavLink>
            <button type="submit" className="btn btn-primary shadow-md">
              Register
            </button>
          </div>
        </form>
        <div className="divider -mt-4">OR</div>
        <button
          onClick={handleGoogleRegister}
          className="flex btn capitalize bg-[#6D54FE] text-white hover:bg-[#6e54fed6] mb-1 w-full"
        >
          <h3 className="font-bold text-xl flex md:hidden">Google</h3>
          <h3 className="font-bold text-xl hidden md:flex">Continue with Google</h3>
        </button>
      </div>
    </div>
  );
};

export default Register;
