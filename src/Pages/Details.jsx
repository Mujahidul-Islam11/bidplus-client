/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Details = () => {
  const details = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const { jobTitle, deadline, price, description, _id, email } = details || {};
  const {user} = useContext(AuthContext)

  const isOwner = user?.email === email 
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const deadline = form.deadline.value;
    const Bids = {
      email,
      deadline,
      price,
      title: jobTitle,
    };
    console.log(Bids)
    fetch(`http://localhost:5000/Bids`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Bids),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };


  return (
    <div className="flex container mx-auto gap-6">
      <div className="card mx-auto glass md:w-1/2">
        <div className="card-body">
          <h2 className="card-title">{jobTitle}</h2>
          <p>{description}</p>
          <p>Last Date : {deadline}</p>
          <p>Price : {price}</p>
        </div>
      </div>
      <div className="">
      <div className="bg-slate-400 rounded-xl p-4 md:p-24">
        <h2 className="text-3xl font-extrabold">
          Add Your Informations
        </h2>
        <form onSubmit={handleSubmit}>

          <div className="md:flex mb-4">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text ">Price you want</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-full md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text ">Deadline</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="deadline"
                  placeholder="Deadline"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-4">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text ">Your Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  defaultValue={user.email}
                  readOnly
                />
              </label>
            </div>
            <div className="form-control w-full md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text ">Buyer's Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="buyerEmail"
                  placeholder=""
                  className={`input input-bordered w-full `}
                  defaultValue={email}
                  readOnly
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Place your bid"
            className={`btn w-full`}
            disabled={isOwner}
          />
        </form>
      </div>
    </div>
    </div>
  );
};

export default Details;
